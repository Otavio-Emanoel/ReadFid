"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, ArrowRight, ZoomIn, ZoomOut, RotateCcw, BookOpen, Maximize, Minimize } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Mock data
const comics = [
  {
    id: 1,
    title: "Dante",
    pages: 24,
    pdfUrl: "/HQs/A Divina Comédia.pdf",
  },
  {
    id: 2,
    title: "Memorias Póstumas de Brás Cubas",
    pages: 32,
    pdfUrl: "/placeholder.pdf",
  },
]

interface ReadPageProps {
  params: {
    id: string
  }
}

export default function ReadPage({ params }: ReadPageProps) {
  const comic = comics.find((c) => c.id === Number.parseInt(params.id))
  const [currentPage, setCurrentPage] = useState(1)
  const [zoom, setZoom] = useState(100)
  const [isFullscreen, setIsFullscreen] = useState(false)

  if (!comic) {
    notFound()
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < comic.pages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handleZoomIn = () => {
    if (zoom < 200) {
      setZoom(zoom + 25)
    }
  }

  const handleZoomOut = () => {
    if (zoom > 50) {
      setZoom(zoom - 25)
    }
  }

  const handleResetZoom = () => {
    setZoom(100)
  }

  const handlePageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const page = Number.parseInt(e.target.value)
    if (page >= 1 && page <= comic.pages) {
      setCurrentPage(page)
    }
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  return (
    <div className={`${isFullscreen ? "fixed inset-0 z-50" : "min-h-screen pt-20"} bg-black`}>
      {/* Header Controls */}
      <div className="bg-black/80 backdrop-blur-lg border-b border-white/10 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href={`/comic/${params.id}`} className="text-white hover:text-pink-400 transition-colors">
              <ArrowLeft className="h-6 w-6" />
            </Link>
            <h1 className="text-white font-semibold text-lg">{comic.title}</h1>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="text-white hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>

            <div className="flex items-center gap-2 text-white">
              <Input
                type="number"
                min="1"
                max={comic.pages}
                value={currentPage}
                onChange={handlePageInput}
                className="w-16 text-center bg-white/10 border-white/20 text-white"
              />
              <span>/ {comic.pages}</span>
            </div>

            <Button
              variant="ghost"
              size="sm"
              onClick={handleNextPage}
              disabled={currentPage === comic.pages}
              className="text-white hover:bg-white/10"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleZoomOut}
              disabled={zoom <= 50}
              className="text-white hover:bg-white/10"
            >
              <ZoomOut className="h-4 w-4" />
            </Button>

            <span className="text-white text-sm w-12 text-center">{zoom}%</span>

            <Button
              variant="ghost"
              size="sm"
              onClick={handleZoomIn}
              disabled={zoom >= 200}
              className="text-white hover:bg-white/10"
            >
              <ZoomIn className="h-4 w-4" />
            </Button>

            <Button variant="ghost" size="sm" onClick={handleResetZoom} className="text-white hover:bg-white/10">
              <RotateCcw className="h-4 w-4" />
            </Button>

            <Button variant="ghost" size="sm" onClick={toggleFullscreen} className="text-white hover:bg-white/10">
              {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>

      {/* PDF Viewer Area */}
      <div className="flex-1 flex items-center justify-center p-4 overflow-auto">
        <Card className="bg-white shadow-2xl" style={{ transform: `scale(${zoom / 100})` }}>
          <CardContent className="p-0">
            {/* Simulação de página de HQ */}
            <div className="w-[600px] h-[800px] bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-4 border-4 border-dashed border-gray-400 rounded-lg flex flex-col items-center justify-center">
                <BookOpen className="h-24 w-24 text-gray-500 mb-4" />
                <h3 className="text-2xl font-bold text-gray-700 mb-2">{comic.title}</h3>
                <p className="text-lg text-gray-600">Página {currentPage}</p>
                <p className="text-sm text-gray-500 mt-4 text-center max-w-md">
                  Esta é uma simulação do visualizador de PDF. Em um projeto real, aqui seria renderizada a página atual
                  do PDF usando uma biblioteca como react-pdf ou pdf.js.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-black/80 backdrop-blur-lg border-t border-white/10 p-4">
        <div className="container mx-auto flex items-center justify-center gap-4">
          <Button
            variant="ghost"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="text-white hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Anterior
          </Button>

          <div className="flex items-center gap-2">
            {Array.from({ length: Math.min(5, comic.pages) }, (_, i) => {
              const pageNum = Math.max(1, Math.min(comic.pages - 4, currentPage - 2)) + i
              return (
                <Button
                  key={pageNum}
                  variant={pageNum === currentPage ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setCurrentPage(pageNum)}
                  className={
                    pageNum === currentPage
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white"
                      : "text-white hover:bg-white/10"
                  }
                >
                  {pageNum}
                </Button>
              )
            })}
          </div>

          <Button
            variant="ghost"
            onClick={handleNextPage}
            disabled={currentPage === comic.pages}
            className="text-white hover:bg-white/10"
          >
            Próxima
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
