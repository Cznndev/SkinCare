import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/contexts/cart-context"
import { ToastProvider } from "@/contexts/toast-context"
import { ToastContainer } from "@/components/toast"
import { FreeShippingNotifier } from "@/components/free-shipping-toast"
import { PromotionProvider } from "@/contexts/promotion-context"
import { AuthProvider } from "@/contexts/auth-context"
import { AppointmentProvider } from "@/contexts/appointment-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "New Age Men - Skincare Masculino Premium",
  description:
    "Produtos de skincare desenvolvidos especificamente para a pele masculina. Fórmulas avançadas que combinam ciência e praticidade.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ToastProvider>
          <AuthProvider>
            <AppointmentProvider>
              <CartProvider>
                <PromotionProvider>
                  {children}
                  <FreeShippingNotifier />
                  <ToastContainer />
                </PromotionProvider>
              </CartProvider>
            </AppointmentProvider>
          </AuthProvider>
        </ToastProvider>
      </body>
    </html>
  )
}
