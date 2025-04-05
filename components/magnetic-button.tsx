"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  href?: string
  strength?: number
  onClick?: () => void
}

export default function MagneticButton({ children, className, href, strength = 30, onClick }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    setPosition({ x, y })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setPosition({ x: 0, y: 0 })
  }

  const buttonStyle = {
    transform: isHovered
      ? `translate(${position.x / strength}px, ${position.y / strength}px) scale(1.1)`
      : "translate(0, 0) scale(1)",
    transition: isHovered ? "transform 0.1s ease" : "transform 0.5s ease",
  }

  const ButtonComponent = () => (
    <Button className={cn("relative transition-all", className)} style={buttonStyle} onClick={onClick}>
      {children}
    </Button>
  )

  return (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      {href ? (
        <a href={href}>
          <ButtonComponent />
        </a>
      ) : (
        <ButtonComponent />
      )}
    </div>
  )
}

