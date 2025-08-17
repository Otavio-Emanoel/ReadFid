"use client"

import { useEffect, useState } from "react"
import { Worker, Viewer, SpecialZoomLevel, ScrollMode } from "@react-pdf-viewer/core"
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout"
import { scrollModePlugin } from "@react-pdf-viewer/scroll-mode"

interface PdfReaderClientProps {
  fileUrl: string
}

export default function PdfReaderClient({ fileUrl }: PdfReaderClientProps) {
  const [mounted, setMounted] = useState(false)
  const [docProxy, setDocProxy] = useState<any>(null)
  const [currentPage, setCurrentPage] = useState(1)

  // Plugins
  const defaultLayoutPluginInstance = defaultLayoutPlugin()
  const scrollModePluginInstance = scrollModePlugin()
  const { switchScrollMode } = scrollModePluginInstance

  useEffect(() => {
    setMounted(true)
    // Rolagem vertical contínua por padrão
    switchScrollMode(ScrollMode.Vertical)
  }, [switchScrollMode])

  // Agendador com idle callback (pré-carrega sem travar a UI)
  const scheduleIdle = (cb: () => void) => {
    if (typeof (window as any).requestIdleCallback === "function") {
      ;(window as any).requestIdleCallback(cb)
    } else {
      setTimeout(cb, 0)
    }
  }

  // Pré-carregar N páginas a partir de um índice (melhora navegação)
  const preloadPages = (startPage: number, count: number) => {
    if (!docProxy) return
    const last = Math.min(docProxy.numPages, startPage + count - 1)
    for (let p = startPage; p <= last; p++) {
      docProxy.getPage(p).catch(() => {})
    }
  }

  // Depois que o documento carrega, pré-carregar o restante em lotes pequenos durante ocioso
  useEffect(() => {
    if (!docProxy) return
    let cancelled = false
    let next = 4 // após as 3 primeiras que já pré-carregamos
    const total = docProxy.numPages as number

    const loadBatch = () => {
      if (cancelled) return
      const end = Math.min(total, next + 3)
      const tasks: Promise<any>[] = []
      for (let p = next; p <= end; p++) {
        tasks.push(docProxy.getPage(p).catch(() => {}))
      }
      Promise.all(tasks).finally(() => {
        next = end + 1
        if (next <= total) {
          scheduleIdle(loadBatch)
        }
      })
    }

    scheduleIdle(loadBatch)
    return () => {
      cancelled = true
    }
  }, [docProxy])

  // Forçar carregamento ao clicar na área do PDF (evita toolbar/sidebar)
  const handleForceLoad = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement
    if (
      target.closest(
        ".rpv-core__toolbar, .rpv-default-layout__toolbar, .rpv-default-layout__sidebar, .rpv-default-layout__sidebar-tabs"
      )
    ) {
      return
    }
    // Pré-carregar rapidamente as próximas 10 páginas
    preloadPages(currentPage + 1, 10)
  }

  return mounted ? (
    <Worker workerUrl="/pdfjs/pdf.worker.min.mjs">
      <div className="h-full" onClick={handleForceLoad}>
        <Viewer
          fileUrl={fileUrl}
          theme="dark"
          defaultScale={SpecialZoomLevel.PageFit}
          transformGetDocumentParams={(options) => ({
            ...options,
            disableAutoFetch: false,
            disableStream: false,
            rangeChunkSize: 4 * 1024 * 1024,
          })}
          onDocumentLoad={(e: any) => {
            setDocProxy(e.doc)
            preloadPages(1, 3)
          }}
          onPageChange={(e: any) => {
            setCurrentPage(e.currentPage)
            // Em rolagem vertical, prefetch um pouco mais à frente
            preloadPages(e.currentPage + 1, 3)
          }}
          plugins={[defaultLayoutPluginInstance, scrollModePluginInstance]}
        />
      </div>
    </Worker>
  ) : (
    <div className="p-8 text-center text-gray-400">Carregando visualizador...</div>
  )
}
