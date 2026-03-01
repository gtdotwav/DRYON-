import { list } from "@vercel/blob"
import { type NextRequest, NextResponse } from "next/server"

const ADMIN_API_KEY = process.env.ADMIN_API_KEY

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get("x-admin-key")
    if (!ADMIN_API_KEY || authHeader !== ADMIN_API_KEY) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { blobs } = await list({
      prefix: "videos/",
    })

    const videos = blobs
      .filter((blob) => blob.pathname.startsWith("videos/"))
      .map((blob) => ({
        url: blob.url,
        filename: blob.pathname.replace("videos/", ""),
        size: blob.size,
        uploadedAt: blob.uploadedAt,
      }))

    return NextResponse.json({ videos })
  } catch (error) {
    console.error("Error listing videos:", error)
    return NextResponse.json({ error: "Failed to list videos" }, { status: 500 })
  }
}
