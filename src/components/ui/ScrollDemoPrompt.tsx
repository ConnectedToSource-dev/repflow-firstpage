import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Play, X } from '@phosphor-icons/react'
import { useModal } from '../../context/ModalContext'
import './ScrollDemoPrompt.css'

export default function ScrollDemoPrompt() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const { openVideo } = useModal()

  useEffect(() => {
    const handler = () => {
      if (dismissed) return
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      if (scrollPercent >= 0.7) {
        setVisible(true)
      }
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [dismissed])

  const handleDismiss = () => {
    setDismissed(true)
    setVisible(false)
  }

  const handleWatch = () => {
    openVideo()
    setDismissed(true)
    setVisible(false)
  }

  if (!visible) return null

  return createPortal(
    <div className="scroll-demo" role="dialog" aria-label="Demo video prompt">
      <div className="scroll-demo__inner">
        <button className="scroll-demo__close" onClick={handleDismiss} aria-label="Dismiss">
          <X size={16} weight="bold" />
        </button>
        <p className="scroll-demo__text">
          Want to see the platform in action? Watch a 2-min demo
        </p>
        <button className="scroll-demo__btn" onClick={handleWatch}>
          <Play size={16} weight="fill" />
          Watch Demo
        </button>
      </div>
    </div>,
    document.body
  )
}
