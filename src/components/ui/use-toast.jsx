"use client"

import * as React from "react"

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 5000

const ToastContext = React.createContext(undefined)

export function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])

  const addToast = React.useCallback((toast) => {
    setToasts((current) => {
      if (current.length >= TOAST_LIMIT) return [...current.slice(1), toast]
      return [...current, toast]
    })
  }, [])

  const removeToast = React.useCallback((id) => {
    setToasts((current) => current.filter((t) => t.id !== id))
  }, [])

  const toast = React.useCallback((opts) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast = { id, ...opts }
    addToast(newToast)
    setTimeout(() => removeToast(id), TOAST_REMOVE_DELAY)
  }, [addToast, removeToast])

  return (
    <ToastContext.Provider value={{ toast, toasts, removeToast }}>
      {children}
    </ToastContext.Provider>
  )
}

export const useToast = () => {
  const context = React.useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within ToastProvider")
  }
  return context
}