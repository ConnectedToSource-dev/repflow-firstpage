import { createContext, useContext, useState, type ReactNode } from 'react'
import ApplicationModal from '../components/ui/ApplicationModal'

type ModalVariant = 'sales' | 'installer' | null

interface ModalContextValue {
  openModal: (variant: 'sales' | 'installer') => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextValue | null>(null)

export function ModalProvider({ children }: { children: ReactNode }) {
  const [variant, setVariant] = useState<ModalVariant>(null)

  const openModal = (v: 'sales' | 'installer') => setVariant(v)
  const closeModal = () => setVariant(null)

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {variant && (
        <ApplicationModal variant={variant} onClose={closeModal} />
      )}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const ctx = useContext(ModalContext)
  if (!ctx) throw new Error('useModal must be used within ModalProvider')
  return ctx
}
