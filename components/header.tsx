"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          LumiTech
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#products" className="text-foreground hover:text-accent transition-colors">
            Products
          </Link>
          <Link href="#about" className="text-foreground hover:text-accent transition-colors">
            About
          </Link>
          <Link href="#contact" className="text-foreground hover:text-accent transition-colors">
            Contact
          </Link>
          <button className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
            Get Quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <Link href="#products" className="text-foreground hover:text-accent transition-colors">
                Products
              </Link>
              <Link href="#about" className="text-foreground hover:text-accent transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-foreground hover:text-accent transition-colors">
                Contact
              </Link>
              <button className="bg-accent text-accent-foreground px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity w-full">
                Get Quote
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
