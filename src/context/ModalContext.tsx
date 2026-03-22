import { createContext, useContext, useState, type ReactNode } from 'react'
import ApplicationModal from '../components/ui/ApplicationModal'
import VideoModal from '../components/ui/VideoModal'

type ModalVariant = 'sales' | 'installer' | null

interface ModalContextValue {
  openModal: (variant: 'sales' | 'installer') => void
  closeModal: () => void
  openVideo: () => void
  closeVideo: () => void
}

const ModalContext = createContext<ModalContextValue | null>(null)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [variant, setVariant] = useState<ModalVariant>(null)
  const [videoOpen, setVideoOpen] = useState(false)

  const openModal = (v: 'sales' | 'installer') => setVariant(v)
  const closeModal = () => setVariant(null)
  const openVideo = () => setVideoOpen(true)
  const closeVideo = () => setVideoOpen(false)

  return (
    <ModalContext.Provider value={{ openModal, closeModal, openVideo, closeVideo }}>
      {children}
      {variant && (
        <ApplicationModal variant={variant} onClose={closeModal} />
      )}
      {videoOpen && (
        <VideoModal onClose={closeVideo} />
      )}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const ctx = useContext(ModalContext)
  if (!ctx) throw new Error('useModal must be used within ModalProvider')
  return ctx
}
