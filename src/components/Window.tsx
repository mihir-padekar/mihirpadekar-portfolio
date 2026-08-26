import { useEffect, useRef, useState } from "react"
import type { ReactNode, MouseEvent } from "react"
import "../css/Window.css"

type WindowProps = {
  title: string
  children: ReactNode
  onClose: () => void
  onFocus: () => void
  onMinimize: () => void
  zIndex: number
  isMinimized: boolean
}

function Window({
  title,
  children,
  onClose,
  onFocus,
  onMinimize,
  zIndex,
  isMinimized,
}: WindowProps) {
  const windowRef = useRef<HTMLElement>(null)

  const [position, setPosition] = useState({
    x: 200,
    y: 120,
  })

  const [isDragging, setIsDragging] = useState(false)
  const [isMaximized, setIsMaximized] = useState(false)

  const dragOffset = useRef({
    x: 0,
    y: 0,
  })

  const handleMouseDown = (event: MouseEvent) => {
    if (isMaximized) return

    onFocus()

    const rect = windowRef.current?.getBoundingClientRect()

    if (!rect) return

    setIsDragging(true)

    dragOffset.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    }
  }

  useEffect(() => {
    if (!isDragging) return

    const handleMouseMove = (event: globalThis.MouseEvent) => {
      setPosition({
        x: event.clientX - dragOffset.current.x,
        y: event.clientY - dragOffset.current.y,
      })
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging])

  const handleMinimize = () => {
    onMinimize()
  }

  const handleMaximize = () => {
    setIsMaximized((current) => !current)
    onFocus()
  }

  /*
   * App.tsx controls minimized state.
   */
  if (isMinimized) {
    return null
  }

  return (
    <section
      ref={windowRef}
      className={
        isMaximized
          ? "os-window app-window maximized"
          : "os-window app-window"
      }
      style={
        isMaximized
          ? {
              zIndex,
            }
          : {
              zIndex,
              left: `${position.x}px`,
              top: `${position.y}px`,
            }
      }
      onMouseDown={onFocus}
    >

      {/* TITLE BAR */}

      <div
        className="window-titlebar"
        onMouseDown={handleMouseDown}
      >
        <span className="window-title">
          {title}
        </span>

        <div className="window-buttons">

          <button
            type="button"
            aria-label="Minimize"
            onMouseDown={(event) =>
              event.stopPropagation()
            }
            onClick={handleMinimize}
          >
            _
          </button>

          <button
            type="button"
            aria-label="Maximize"
            onMouseDown={(event) =>
              event.stopPropagation()
            }
            onClick={handleMaximize}
          >
            {isMaximized ? "❐" : "□"}
          </button>

          <button
            type="button"
            aria-label="Close"
            onMouseDown={(event) =>
              event.stopPropagation()
            }
            onClick={(event) => {
              event.stopPropagation()
              onClose()
            }}
          >
            ×
          </button>

        </div>
      </div>


      {/* CONTENT */}

      <div className="app-window-content">
        {children}
      </div>


      {/* STATUS BAR */}

      <div className="window-statusbar">
        <span>
          Ready
        </span>

        <span>
          {isMaximized
            ? "Maximized"
            : "Application"}
        </span>
      </div>

    </section>
  )
}

export default Window