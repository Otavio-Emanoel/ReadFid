"use client"

import { use, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Maximize, Minimize } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import dynamic from "next/dynamic"

// Mock data
const comics = [
	{
		id: 1,
		title: "Raios & Gritos",
		pages: 28,
		pdfUrl: "/HQs/raios_&_gritos.pdf",
	},
	{
		id: 2,
		title: "Memorias Póstumas de Brás Cubas",
		pages: 32,
		pdfUrl: "/placeholder.pdf",
	},
]

const PdfReaderClient = dynamic(
	() => import("@/components/PdfReaderClient"),
	{ ssr: false }
)

interface ReadPageProps {
	params: Promise<{ id: string }>
}

export default function ReadPage({ params }: ReadPageProps) {
	const resolvedParams = use(params)
	const comic = comics.find((c) => c.id === Number.parseInt(resolvedParams.id))
	const [isFullscreen, setIsFullscreen] = useState(false)

	if (!comic) {
		notFound()
	}

	const toggleFullscreen = () => setIsFullscreen((v) => !v)

	return (
		<div
			className={`${
				isFullscreen ? "fixed inset-0 z-50" : "min-h-screen pt-20"
			} bg-black`}
		>
			{/* Header */}
			<div className="bg-black/80 backdrop-blur-lg border-b border-white/10 p-4">
				<div className="container mx-auto flex items-center justify-between">
					<div className="flex items-center gap-4">
						<Link
							href={`/comic/${resolvedParams.id}`}
							className="text-white hover:text-pink-400 transition-colors"
						>
							<ArrowLeft className="h-6 w-6" />
						</Link>
						<h1 className="text-white font-semibold text-lg">
							{comic.title}
						</h1>
					</div>

					<div className="flex items-center gap-2">
						<Button
							variant="ghost"
							size="sm"
							onClick={toggleFullscreen}
							className="text-white hover:bg-white/10"
						>
							{isFullscreen ? (
								<Minimize className="h-4 w-4" />
							) : (
								<Maximize className="h-4 w-4" />
							)}
						</Button>
					</div>
				</div>
			</div>

			{/* PDF Viewer Area */}
			<div className="flex-1 flex items-center justify-center p-4 overflow-auto">
				<div className="w-full max-w-[1000px] h-[calc(100vh-160px)] bg-white shadow-2xl">
					<PdfReaderClient fileUrl={comic.pdfUrl} />
				</div>
			</div>
		</div>
	)
}
