"use client"

import type React from "react"

import { useState, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Upload, Copy, Check, Loader2, Film, Lock } from "lucide-react"
import useSWR, { mutate } from "swr"

interface Video {
  url: string
  filename: string
  size: number
  uploadedAt: string
}

export default function UploadVideosPage() {
  const [uploading, setUploading] = useState(false)
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null)
  const [adminKey, setAdminKey] = useState("")
  const [authenticated, setAuthenticated] = useState(false)
  const [authError, setAuthError] = useState(false)

  useEffect(() => {
    const savedKey = sessionStorage.getItem("admin-key")
    if (savedKey) {
      setAdminKey(savedKey)
      setAuthenticated(true)
    }
  }, [])

  const fetcherWithAuth = useCallback(
    (url: string) =>
      fetch(url, { headers: { "x-admin-key": adminKey } }).then((res) => {
        if (res.status === 401) throw new Error("Unauthorized")
        return res.json()
      }),
    [adminKey],
  )

  const { data, error, isLoading } = useSWR<{ videos: Video[] }>(
    authenticated ? "/api/videos/list" : null,
    fetcherWithAuth,
  )

  const handleLogin = useCallback(() => {
    if (!adminKey.trim()) return
    fetch("/api/videos/list", { headers: { "x-admin-key": adminKey } })
      .then((res) => {
        if (res.ok) {
          setAuthenticated(true)
          setAuthError(false)
          sessionStorage.setItem("admin-key", adminKey)
        } else {
          setAuthError(true)
        }
      })
      .catch(() => setAuthError(true))
  }, [adminKey])

  const handleUpload = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files
      if (!files || files.length === 0) return

      setUploading(true)

      try {
        for (const file of Array.from(files)) {
          const formData = new FormData()
          formData.append("file", file)

          const response = await fetch("/api/videos/upload", {
            method: "POST",
            headers: { "x-admin-key": adminKey },
            body: formData,
          })

          if (!response.ok) {
            const err = await response.json()
            throw new Error(err.error || "Upload failed")
          }
        }

        mutate("/api/videos/list")
      } catch (err) {
        console.error("Upload error:", err)
        alert(err instanceof Error ? err.message : "Upload failed")
      } finally {
        setUploading(false)
        e.target.value = ""
      }
    },
    [adminKey],
  )

  const copyUrl = useCallback((url: string) => {
    navigator.clipboard.writeText(url)
    setCopiedUrl(url)
    setTimeout(() => setCopiedUrl(null), 2000)
  }, [])

  const formatSize = (bytes: number) => {
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Admin — Upload de Vídeos
            </CardTitle>
            <CardDescription>Insira a chave de administrador para continuar.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              type="password"
              placeholder="Chave de admin"
              value={adminKey}
              onChange={(e) => {
                setAdminKey(e.target.value)
                setAuthError(false)
              }}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
            />
            {authError && <p className="text-sm text-red-500">Chave inválida.</p>}
            <Button onClick={handleLogin} className="w-full">
              Entrar
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Film className="h-6 w-6" />
              Upload de Vídeos - Hero Banner
            </CardTitle>
            <CardDescription>
              Faça upload dos vídeos para o VideoHeroBanner. Após o upload, copie as URLs geradas.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer hover:border-teal-500 hover:bg-slate-100 transition-colors">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                {uploading ? (
                  <>
                    <Loader2 className="h-8 w-8 text-teal-600 animate-spin mb-2" />
                    <p className="text-sm text-slate-600">Enviando vídeos...</p>
                  </>
                ) : (
                  <>
                    <Upload className="h-8 w-8 text-slate-400 mb-2" />
                    <p className="text-sm text-slate-600">
                      <span className="font-semibold text-teal-600">Clique para selecionar</span> ou arraste os vídeos
                    </p>
                    <p className="text-xs text-slate-400 mt-1">MP4, WebM, MOV (máx. 500MB cada)</p>
                  </>
                )}
              </div>
              <input
                type="file"
                accept="video/*"
                multiple
                onChange={handleUpload}
                disabled={uploading}
                className="hidden"
              />
            </label>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Vídeos Enviados</CardTitle>
            <CardDescription>
              {isLoading ? "Carregando..." : `${data?.videos?.length || 0} vídeo(s) no Vercel Blob`}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error ? (
              <p className="text-red-500">Erro ao carregar vídeos</p>
            ) : isLoading ? (
              <div className="flex justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-slate-400" />
              </div>
            ) : data?.videos?.length === 0 ? (
              <p className="text-slate-500 text-center py-8">Nenhum vídeo enviado ainda</p>
            ) : (
              <div className="space-y-3">
                {data?.videos?.map((video) => (
                  <div key={video.url} className="flex items-center gap-4 p-4 bg-slate-100 rounded-lg">
                    <video src={video.url} className="w-20 h-20 object-cover rounded" muted />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{video.filename}</p>
                      <p className="text-sm text-slate-500">{formatSize(video.size)}</p>
                      <p className="text-xs text-slate-400 truncate">{video.url}</p>
                    </div>
                    <Button variant="outline" size="sm" onClick={() => copyUrl(video.url)} className="shrink-0">
                      {copiedUrl === video.url ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="bg-teal-50 border-teal-200">
          <CardHeader>
            <CardTitle className="text-teal-800">Como usar</CardTitle>
          </CardHeader>
          <CardContent className="text-teal-700 space-y-2">
            <p>1. Faça upload dos 4 vídeos do Google Drive acima</p>
            <p>2. Copie as URLs geradas</p>
            <p>3. O componente VideoHeroBanner vai buscar automaticamente os vídeos enviados</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
