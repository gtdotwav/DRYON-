import { put } from "@vercel/blob"
import { type NextRequest, NextResponse } from "next/server"

const ADMIN_API_KEY = process.env.ADMIN_API_KEY

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("x-admin-key")
    if (!ADMIN_API_KEY || authHeader !== ADMIN_API_KEY) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    // Validate video file type
    if (!file.type.startsWith("video/")) {
      return NextResponse.json({ error: "File must be a video" }, { status: 400 })
    }

    // Limit file size to 500MB
    const MAX_SIZE = 500 * 1024 * 1024
    if (file.size > MAX_SIZE) {
      return NextResponse.json({ error: "File too large (max 500MB)" }, { status: 413 })
    }

    // Upload to Vercel Blob with videos folder prefix
    const blob = await put(`videos/${file.name}`, file, {
      access: "public",
    })

    return NextResponse.json({
      url: blob.url,
      filename: file.name,
      size: file.size,
      type: file.type,
    })
  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json({ error: "Upload failed" }, { status: 500 })
  }
}
