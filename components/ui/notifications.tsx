"use client"

import { useState, useCallback, useEffect } from "react"
import { X, CheckCircle, AlertCircle, Info, Gift } from "lucide-react"

export interface Notification {
  id: string
  type: "success" | "error" | "info" | "promo"
  title: string
  message: string
  duration?: number
}

export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([])

  const addNotification = useCallback((notification: Omit<Notification, "id">) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newNotification = { ...notification, id }

    setNotifications((prev) => [...prev, newNotification])

    if (notification.duration) {
      setTimeout(() => {
        setNotifications((prev) => prev.filter((n) => n.id !== id))
      }, notification.duration)
    }
  }, [])

  const removeNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id))
  }, [])

  const NotificationContainer = () => (
    <div className="fixed top-24 right-6 z-50 space-y-4 max-w-sm pointer-events-none">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="bg-white rounded-2xl shadow-2xl p-4 border-l-4 animate-slide-in-right pointer-events-auto transform transition-all duration-300 hover:scale-105"
          style={{
            borderLeftColor:
              notification.type === "success"
                ? "#10B981"
                : notification.type === "error"
                  ? "#EF4444"
                  : notification.type === "promo"
                    ? "#F5EB06"
                    : "#3B82F6",
          }}
          role="alert"
          aria-live="polite"
        >
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 mt-0.5">
              {notification.type === "success" && (
                <CheckCircle className="text-green-500" size={20} aria-hidden="true" />
              )}
              {notification.type === "error" && <AlertCircle className="text-red-500" size={20} aria-hidden="true" />}
              {notification.type === "info" && <Info className="text-blue-500" size={20} aria-hidden="true" />}
              {notification.type === "promo" && <Gift className="text-yellow-500" size={20} aria-hidden="true" />}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-gray-900 text-sm leading-tight">{notification.title}</h4>
              <p className="text-gray-600 text-xs mt-1 leading-relaxed">{notification.message}</p>
            </div>
            <button
              onClick={() => removeNotification(notification.id)}
              className="flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-lg hover:bg-gray-100"
              aria-label="Fechar notificação"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      ))}
    </div>
  )

  return { addNotification, removeNotification, NotificationContainer }
}

export function PromoPopup({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [onClose])

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in-up"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-title"
    >
      <div
        className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-lg hover:bg-gray-100"
          aria-label="Fechar popup"
        >
          <X size={24} />
        </button>

        <div className="text-center">
          <Gift className="mx-auto mb-4 text-yellow-500 animate-bounce" size={48} aria-hidden="true" />
          <h3 id="promo-title" className="text-3xl font-black text-gray-900 mb-4">
            OFERTA ESPECIAL!
          </h3>
          <p className="text-lg text-gray-700 mb-6 font-bold">20% OFF na primeira compra</p>
          <p className="text-gray-600 mb-8">
            Use o código <span className="font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded">TOON20</span> e garanta
            sua proteção com desconto!
          </p>
          <button
            onClick={onClose}
            className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            QUERO APROVEITAR!
          </button>
        </div>
      </div>
    </div>
  )
}
