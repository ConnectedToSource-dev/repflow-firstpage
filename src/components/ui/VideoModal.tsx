import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { X } from '@phosphor-icons/react'
import './VideoModal.css'

interface Props {
  onClose: () => void
}

export default function VideoModal({ onClose }: Props) {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return createPortal(
    <div className="video-modal__backdrop" onClick={onClose}>
      <div className="video-modal__panel" ref={panelRef} role="dialog" aria-modal="true" onClick={e => e.stopPropagation()}>
        <button className="video-modal__close" onClick={onClose} aria-label="Close">
          <X size={22} weight="bold" />
        </button>
        <div className="video-modal__embed">
          <iframe
            src="https://www.youtube.com/embed/-x2rbkEjjsU?autoplay=1&rel=0"
            title="HomeBioHackers Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>,
    document.body
  )
}
