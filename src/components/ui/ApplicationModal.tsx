import { useState, useEffect, useRef, type FormEvent } from 'react'
import { createPortal } from 'react-dom'
import { X, CheckCircle } from '@phosphor-icons/react'
import { supabase } from '../../lib/supabase'
import './ApplicationModal.css'

interface Props {
  variant: 'sales' | 'installer'
  onClose: () => void
}

const countryCodes = [
  { code: 'US', dial: '+1', flag: '\u{1F1FA}\u{1F1F8}' },
  { code: 'CA', dial: '+1', flag: '\u{1F1E8}\u{1F1E6}' },
  { code: 'GB', dial: '+44', flag: '\u{1F1EC}\u{1F1E7}' },
  { code: 'NL', dial: '+31', flag: '\u{1F1F3}\u{1F1F1}' },
  { code: 'DE', dial: '+49', flag: '\u{1F1E9}\u{1F1EA}' },
  { code: 'FR', dial: '+33', flag: '\u{1F1EB}\u{1F1F7}' },
  { code: 'AU', dial: '+61', flag: '\u{1F1E6}\u{1F1FA}' },
  { code: 'IN', dial: '+91', flag: '\u{1F1EE}\u{1F1F3}' },
  { code: 'BR', dial: '+55', flag: '\u{1F1E7}\u{1F1F7}' },
  { code: 'MX', dial: '+52', flag: '\u{1F1F2}\u{1F1FD}' },
  { code: 'ES', dial: '+34', flag: '\u{1F1EA}\u{1F1F8}' },
  { code: 'IT', dial: '+39', flag: '\u{1F1EE}\u{1F1F9}' },
  { code: 'BE', dial: '+32', flag: '\u{1F1E7}\u{1F1EA}' },
  { code: 'ZA', dial: '+27', flag: '\u{1F1FF}\u{1F1E6}' },
  { code: 'AE', dial: '+971', flag: '\u{1F1E6}\u{1F1EA}' },
]

const headers: Record<string, string> = {
  sales: 'Apply as a Sales Partner',
  installer: 'Apply as an Installer',
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function ApplicationModal({ variant, onClose }: Props) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: '+1',
    phone: '',
    company: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const panelRef = useRef<HTMLDivElement>(null)

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  // Focus trap
  useEffect(() => {
    const panel = panelRef.current
    if (!panel) return

    const focusable = panel.querySelectorAll<HTMLElement>(
      'button, input, select, [tabindex]:not([tabindex="-1"])'
    )
    if (focusable.length) focusable[0].focus()

    const handler = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return
      const els = panel.querySelectorAll<HTMLElement>(
        'button, input, select, [tabindex]:not([tabindex="-1"])'
      )
      if (!els.length) return
      const first = els[0]
      const last = els[els.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [success])

  const validate = () => {
    const errs: Record<string, string> = {}
    if (!form.firstName.trim()) errs.firstName = 'First name is required'
    if (!form.lastName.trim()) errs.lastName = 'Last name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!emailRegex.test(form.email)) errs.email = 'Enter a valid email'
    if (!form.phone.trim()) errs.phone = 'Phone number is required'
    else if (!/^\d{7,15}$/.test(form.phone.replace(/\s/g, ''))) errs.phone = 'Enter a valid phone number'
    if (!form.company.trim()) errs.company = 'Company is required'
    return errs
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length) return

    setSubmitting(true)
    try {
      await supabase.from('applications').insert({
        type: variant,
        first_name: form.firstName.trim(),
        last_name: form.lastName.trim(),
        email: form.email.trim(),
        phone_country_code: form.countryCode,
        phone_number: form.phone.replace(/\s/g, ''),
        company: form.company.trim(),
      })
      setSuccess(true)
      setTimeout(onClose, 2000)
    } catch {
      setErrors({ submit: 'Something went wrong. Please try again.' })
    } finally {
      setSubmitting(false)
    }
  }

  const update = (field: string, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => { const next = { ...prev }; delete next[field]; return next })
  }

  return createPortal(
    <div className="modal__backdrop" onClick={onClose}>
      <div className="modal__panel" ref={panelRef} role="dialog" aria-modal="true" onClick={e => e.stopPropagation()}>
        {success ? (
          <div className="modal__success">
            <div className="modal__success-icon">
              <CheckCircle size={32} weight="fill" />
            </div>
            <h3 className="modal__success-title">Application submitted!</h3>
            <p className="modal__success-text">
              We've received your application. Our team will be in touch shortly.
            </p>
          </div>
        ) : (
          <>
            <div className="modal__header">
              <h2 className="modal__title" id="modal-title">{headers[variant]}</h2>
              <button className="modal__close" onClick={onClose} aria-label="Close">
                <X size={20} weight="bold" />
              </button>
            </div>

            <form className="modal__form" onSubmit={handleSubmit} noValidate>
              <div className="modal__row">
                <div className="modal__field">
                  <label className="modal__label" htmlFor="firstName">First name</label>
                  <input
                    id="firstName"
                    className={`modal__input ${errors.firstName ? 'modal__input--error' : ''}`}
                    type="text"
                    placeholder="John"
                    value={form.firstName}
                    onChange={e => update('firstName', e.target.value)}
                  />
                  {errors.firstName && <span className="modal__error">{errors.firstName}</span>}
                </div>
                <div className="modal__field">
                  <label className="modal__label" htmlFor="lastName">Last name</label>
                  <input
                    id="lastName"
                    className={`modal__input ${errors.lastName ? 'modal__input--error' : ''}`}
                    type="text"
                    placeholder="Doe"
                    value={form.lastName}
                    onChange={e => update('lastName', e.target.value)}
                  />
                  {errors.lastName && <span className="modal__error">{errors.lastName}</span>}
                </div>
              </div>

              <div className="modal__field">
                <label className="modal__label" htmlFor="email">Email</label>
                <input
                  id="email"
                  className={`modal__input ${errors.email ? 'modal__input--error' : ''}`}
                  type="email"
                  placeholder="john@company.com"
                  value={form.email}
                  onChange={e => update('email', e.target.value)}
                />
                {errors.email && <span className="modal__error">{errors.email}</span>}
              </div>

              <div className="modal__field">
                <label className="modal__label" htmlFor="phone">Phone number</label>
                <div className="modal__phone-group">
                  <select
                    className="modal__phone-code"
                    value={form.countryCode}
                    onChange={e => update('countryCode', e.target.value)}
                  >
                    {countryCodes.map(c => (
                      <option key={c.code} value={c.dial}>
                        {c.flag} {c.code} ({c.dial})
                      </option>
                    ))}
                  </select>
                  <input
                    id="phone"
                    className={`modal__input modal__phone-number ${errors.phone ? 'modal__input--error' : ''}`}
                    type="tel"
                    placeholder="1234567890"
                    value={form.phone}
                    onChange={e => update('phone', e.target.value)}
                  />
                </div>
                {errors.phone && <span className="modal__error">{errors.phone}</span>}
              </div>

              <div className="modal__field">
                <label className="modal__label" htmlFor="company">Company</label>
                <input
                  id="company"
                  className={`modal__input ${errors.company ? 'modal__input--error' : ''}`}
                  type="text"
                  placeholder="Your company name"
                  value={form.company}
                  onChange={e => update('company', e.target.value)}
                />
                {errors.company && <span className="modal__error">{errors.company}</span>}
              </div>

              {errors.submit && <span className="modal__error">{errors.submit}</span>}

              <button type="submit" className="modal__submit" disabled={submitting}>
                {submitting ? 'Submitting...' : 'Submit Application'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>,
    document.body
  )
}
