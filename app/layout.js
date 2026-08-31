import './globals.css'
import { Toaster } from '@/components/ui/sonner'

export const metadata = {
  title: 'JGK Kirana Store - Online Grocery Store',
  description: 'Fresh groceries, dals, spices, oils, household & personal care delivered to your door.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
