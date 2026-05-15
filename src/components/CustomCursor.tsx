import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const mouse = useRef({ x: 0, y: 0 })
  const pos = useRef({ x: 0, y: 0 })
  const animating = useRef(false)

  useEffect(() => {
    const ease = 0.08

    const lerp = (current: number, target: number) =>
      current + (target - current) * ease

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY

      if (!visible) setVisible(true)

      if (!animating.current) {
        animating.current = true
        // Jump to mouse position on first move
        pos.current.x = e.clientX
        pos.current.y = e.clientY
        animate()
      }
    }

    const handleMouseLeave = () => {
      setVisible(false)
    }

    const handleMouseEnter = () => {
      setVisible(true)
    }

    function animate() {
      pos.current.x = lerp(pos.current.x, mouse.current.x)
      pos.current.y = lerp(pos.current.y, mouse.current.y)

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`
      }

      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.body.addEventListener('mouseleave', handleMouseLeave)
    document.body.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
      document.body.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [visible])

  // Hide on touch devices
  const isTouchDevice =
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0)

  if (isTouchDevice) return null

  return (
    <div
      ref={cursorRef}
      className="custom-cursor"
      style={{
        opacity: visible ? 1 : 0,
      }}
    />
  )
}
