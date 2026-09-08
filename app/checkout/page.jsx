// app/checkout/page.jsx
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import { toast } from 'sonner'
import { ArrowLeft, ShoppingCart, Truck, ShieldCheck, Clock } from 'lucide-react'
import Image from 'next/image'

const DELIVERY_CHARGE = 40
const FREE_DELIVERY_ABOVE = 500

export default function CheckoutPage() {
  const router = useRouter()
  const [cart, setCart] = useState([])
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    notes: '',
  })

  useEffect(() => {
    try {
      const saved = localStorage.getItem('mggm_cart_v1')
      if (saved) {
        const cartData = JSON.parse(saved)
        // Convert cart object to array with product details
        // You'll need to fetch product details from your PRODUCTS data
        // For now, we'll use a simplified version
        setCart(Object.entries(cartData).map(([id, qty]) => ({ id, qty })))
      }
    } catch (error) {
      console.error('Error loading cart:', error)
    }
  }, [])

  const getTotal = () => {
    // Calculate total from cart
    // This should match your product prices
    return cart.reduce((sum, item) => sum + (item.price || 0) * item.qty, 0)
  }

  const subtotal = getTotal()
  const delivery = subtotal > 0 && subtotal < FREE_DELIVERY_ABOVE ? DELIVERY_CHARGE : 0
  const total = subtotal + delivery

  // =========================================================
  // ✅ FIXED: Create WhatsApp message (NO TypeScript syntax)
  // =========================================================
  const createWhatsAppMessage = (orderId) => {
    const message = `🛍️ *New Order - Maa Gayatri Goshainganj Mart*

👤 *Customer:* ${form.name}
📱 *Phone:* ${form.phone}
📍 *Address:* ${form.address}

📦 *Order Items:*
${cart.map(item => `  • ${item.name || item.id} × ${item.qty}`).join('\n')}

💰 *Subtotal:* ₹${subtotal}
🚚 *Delivery:* ${delivery === 0 ? 'FREE' : '₹' + delivery}
💵 *Total:* ₹${total}

📝 *Notes:* ${form.notes || 'N/A'}

🆔 *Order ID:* ${orderId || 'Pending'}

🙏 Thank you for shopping at Maa Gayatri Goshainganj Mart!`
    return message
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!form.name || !form.phone || !form.address) {
      toast.error('Please fill all required fields')
      return
    }

    setLoading(true)

    try {
      // Generate order ID
      const orderId = 'ORD-' + Date.now().toString().slice(-6)
      
      // Create order data
      const orderData = {
        orderId,
        ...form,
        items: cart,
        subtotal,
        delivery,
        total,
        createdAt: new Date().toISOString(),
      }

      // Send to API
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      })

      if (!response.ok) {
        throw new Error('Failed to place order')
      }

      const result = await response.json()

      // Send WhatsApp message
      const whatsappMessage = createWhatsAppMessage(orderId)
      const phoneNumber = '919876543210' // 👈 Apna WhatsApp number
      const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`

      // Clear cart
      localStorage.removeItem('mggm_cart_v1')

      toast.success(`🎉 Order placed! ID: ${orderId}`, {
        description: 'We will call you to confirm shortly.',
        action: {
          label: '📱 WhatsApp',
          onClick: () => window.open(whatsappLink, '_blank'),
        },
      })

      // Redirect to home after delay
      setTimeout(() => {
        router.push('/')
      }, 3000)

    } catch (error) {
      toast.error(error.message || 'Failed to place order')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center gap-4">
          <button onClick={() => router.back()} className="p-2 hover:bg-stone-100 rounded-full transition">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-amber-700" />
            <h1 className="font-bold text-lg">Checkout</h1>
          </div>
          <span className="ml-auto text-sm text-muted-foreground">{cart.length} items</span>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left: Order Form */}
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">📋 Delivery Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label>Full Name *</Label>
                      <Input
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Ramesh Kumar"
                        required
                      />
                    </div>
                    <div>
                      <Label>Phone Number *</Label>
                      <Input
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 9876543210"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label>Delivery Address *</Label>
                    <Textarea
                      value={form.address}
                      onChange={(e) => setForm({ ...form, address: e.target.value })}
                      placeholder="House no., Street, Area, Landmark, City, Pincode"
                      rows={3}
                      required
                    />
                  </div>
                  <div>
                    <Label>Order Notes (optional)</Label>
                    <Input
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      placeholder="Any special instructions"
                    />
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Delivery Features */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="flex items-center gap-2 p-3 bg-white rounded-lg border">
                <Truck className="w-4 h-4 text-green-600" />
                <span className="text-xs font-medium">Free Delivery Above ₹{FREE_DELIVERY_ABOVE}</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-white rounded-lg border">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-medium">Same Day Delivery</span>
              </div>
              <div className="flex items-center gap-2 p-3 bg-white rounded-lg border">
                <ShieldCheck className="w-4 h-4 text-purple-600" />
                <span className="text-xs font-medium">100% Authentic</span>
              </div>
            </div>
          </div>

          {/* Right: Order Summary */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg">📋 Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Items */}
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {cart.length === 0 ? (
                    <p className="text-sm text-muted-foreground">Your cart is empty</p>
                  ) : (
                    cart.map((item, idx) => (
                      <div key={idx} className="flex justify-between text-sm py-1 border-b">
                        <span>{item.name || item.id} × {item.qty}</span>
                        <span className="font-medium">₹{((item.price || 0) * item.qty).toFixed(2)}</span>
                      </div>
                    ))
                  )}
                </div>

                <Separator />

                {/* Totals */}
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery</span>
                    <span className={delivery === 0 ? 'text-green-600 font-medium' : ''}>
                      {delivery === 0 ? 'FREE' : '₹' + delivery.toFixed(2)}
                    </span>
                  </div>
                  {cart.length > 0 && subtotal < FREE_DELIVERY_ABOVE && (
                    <p className="text-xs text-amber-600">
                      🚚 Add ₹{(FREE_DELIVERY_ABOVE - subtotal).toFixed(2)} more for free delivery
                    </p>
                  )}
                </div>

                <Separator />

                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-amber-700">₹{total.toFixed(2)}</span>
                </div>

                <Button
                  onClick={handleSubmit}
                  disabled={loading || cart.length === 0}
                  className="w-full h-12 bg-amber-700 hover:bg-amber-800 text-base"
                >
                  {loading ? '⏳ Placing Order...' : `🛍️ Place Order · ₹${total.toFixed(2)}`}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  🔒 Cash on Delivery available
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}