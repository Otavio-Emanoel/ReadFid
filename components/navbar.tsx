"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Menu, X } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-2 rounded-lg">
              <BookOpen className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white">HQ Reader</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-pink-400 transition-colors">
              Início
            </Link>
            <Link href="/explore" className="text-white hover:text-pink-400 transition-colors">
              Explorar
            </Link>
            <Button
              variant="outline"
              className="border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white bg-transparent"
            >
              Entrar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-white hover:text-pink-400 transition-colors">
                Início
              </Link>
              <Link href="/explore" className="text-white hover:text-pink-400 transition-colors">
                Explorar
              </Link>
              <Button
                variant="outline"
                className="border-pink-500 text-pink-400 hover:bg-pink-500 hover:text-white w-fit bg-transparent"
              >
                Entrar
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
