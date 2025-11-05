"use client"

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast.jsx"
import { ToastProvider as RadixToastProvider } from "@radix-ui/react-toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <RadixToastProvider>
      {toasts.map(({ id, title, description }) => (
        <Toast key={id}>
          <div className="grid gap-1">
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && <ToastDescription>{description}</ToastDescription>}
          </div>
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport />
    </RadixToastProvider>
  )
}