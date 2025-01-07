'use client'

import { useCallback } from 'react'

export const useScrollAnimation = () => {
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id)
    if (element) {
      // Get navbar height - adjust selector if needed
      const navbar = document.querySelector('header')
      const navbarHeight = navbar?.getBoundingClientRect().height || 0
      
      // Calculate position
      const elementTop = element.getBoundingClientRect().top + window.scrollY
      const isMobile = window.innerWidth < 768 // Tailwind's md breakpoint
      
      // Add extra offset for mobile
      const offset = isMobile ? navbarHeight + 20 : navbarHeight
      const finalPosition = elementTop - offset

      // Smooth scroll
      window.scrollTo({
        top: finalPosition,
        behavior: 'smooth'
      })

      // Add highlight animation
      const addHighlight = () => {
        element.style.transition = 'background-color 0.5s ease-in-out'
        element.style.backgroundColor = 'rgba(var(--primary), 0.1)'
        setTimeout(() => {
          element.style.backgroundColor = ''
        }, 1000)
      }

      // Wait for scroll to finish before highlighting
      setTimeout(addHighlight, 500)
    }
  }, [])

  return { scrollToSection }
}
