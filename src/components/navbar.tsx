'use client'

import * as React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FlameIcon as Fire, Menu } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

export function Navbar() {
  const [open, setOpen] = React.useState(false)
  const { scrollToSection } = useScrollAnimation()
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    setOpen(false)
    scrollToSection(id.replace('#', ''))
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-[90%] mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Fire className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">Streakup</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            href="#features" 
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={(e) => handleLinkClick(e, 'features')}
          >
            Features
          </Link>
          <Link 
            href="#how-it-works" 
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={(e) => handleLinkClick(e, 'how-it-works')}
          >
            How It Works
          </Link>
          <Link 
            href="#pricing" 
            className="text-sm font-medium transition-colors hover:text-primary"
            onClick={(e) => handleLinkClick(e, 'pricing')}
          >
            Pricing
          </Link>
          <Button variant="default" size="sm">
            Join Waitlist
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="mr-2">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4 mt-6">
              <Link
                href="#features"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={(e) => handleLinkClick(e, 'features')}
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={(e) => handleLinkClick(e, 'how-it-works')}
              >
                How It Works
              </Link>
              <Link
                href="#pricing"
                className="text-lg font-medium transition-colors hover:text-primary"
                onClick={(e) => handleLinkClick(e, 'pricing')}
              >
                Pricing
              </Link>
              <Button variant="default" className="mt-2" onClick={handleLinkClick}>
                Join Waitlist
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
