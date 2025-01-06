'use client'

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FlameIcon as Fire } from 'lucide-react'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-[90%] mx-auto flex h-16 items-center mt-2">
        <div className="flex items-center space-x-2">
          <Fire className="h-6 w-6 text-primary" />
          <span className="font-bold">Streakly</span>
        </div>
        <nav className="flex flex-1 items-center justify-end space-x-4">
          <Link href="#features" className="text-sm font-medium hover:text-primary">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">
            How It Works
          </Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-primary">
            Pricing
          </Link>
          <Button variant="default" size="sm">
            Join Waitlist
          </Button>
        </nav>
      </div>
    </header>
  )
}

