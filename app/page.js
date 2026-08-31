'use client'

import { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter } from '@/components/ui/sheet'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import { toast } from 'sonner'
import {
  ShoppingCart, Search, MapPin, Phone, Menu, Plus, Minus, Trash2,
  Truck, ShieldCheck, Clock, ChevronRight, X, Store, Sparkles,
} from 'lucide-react'
import { CATEGORIES, PRODUCTS, getByCategory, getFeatured, getBestDeals } from '@/lib/products'

const CART_KEY = 'jgk_cart_v1'
const fmt = (n) => `₹${n.toLocaleString('en-IN')}`

function App() {
  const [cart, setCart] = useState({})
  const [cartOpen, setCartOpen] = useState(false)
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('all')
  const [query, setQuery] = useState('')
  const [ordering, setOrdering] = useState(false)

  useEffect(() => {
    try {
      const s = localStorage.getItem(CART_KEY)
      if (s) setCart(JSON.parse(s))
    } catch {}
  }, [])
  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart))
  }, [cart])

  const addToCart = (p) => {
    setCart(c => ({ ...c, [p.id]: (c[p.id] || 0) + 1 }))
    toast.success(`${p.name} added to cart`)
  }
  const decrement = (id) => setCart(c => {
    const n = { ...c }
    if (!n[id]) return n
    n[id] -= 1
    if (n[id] <= 0) delete n[id]
    return n
  })
  const removeFromCart = (id) => setCart(c => { const n = { ...c }; delete n[id]; return n })
  const clearCart = () => setCart({})

  const cartItems = useMemo(() =>
    Object.entries(cart).map(([id, qty]) => {
      const prod = PRODUCTS.find(p => p.id === id)
      return prod ? { ...prod, qty } : null
    }).filter(Boolean), [cart])

  const cartCount = cartItems.reduce((s, i) => s + i.qty, 0)
  const subtotal = cartItems.reduce((s, i) => s + i.price * i.qty, 0)
  const savings = cartItems.reduce((s, i) => s + (i.mrp - i.price) * i.qty, 0)
  const delivery = subtotal > 0 && subtotal < 500 ? 40 : 0
  const total = subtotal + delivery

  const filteredProducts = useMemo(() => {
    let list = activeCategory === 'all' ? PRODUCTS : getByCategory(activeCategory)
    if (query.trim()) {
      const q = query.toLowerCase()
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) || (p.hindi || '').toLowerCase().includes(q)
      )
    }
    return list
  }, [activeCategory, query])

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Top Info Bar */}
      <div className="bg-green-800 text-green-50 text-xs">
        <div className="container mx-auto flex items-center justify-between h-8 px-4">
          <div className="flex items-center gap-4">
            <span className="hidden sm:flex items-center gap-1"><MapPin className="w-3 h-3" /> Deliver to Jodhpur, RJ 342001</span>
            <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> +91 9876543210</span>
          </div>
          <span className="hidden md:block">Free delivery on orders above ₹500 🚚</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center gap-3 md:gap-6">
          <button onClick={() => { setActiveCategory('all'); setQuery('') }} className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center text-white font-black shadow">
              JGK
            </div>
            <div className="hidden sm:block leading-tight text-left">
              <div className="font-black text-lg text-green-800">JGK Kirana</div>
              <div className="text-[10px] text-muted-foreground">Fresh · Trusted · Home Delivered</div>
            </div>
          </button>

          <div className="flex-1 relative max-w-2xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='Search "basmati rice", "dal", "masala"...'
              className="pl-9 pr-4 h-11 rounded-full bg-stone-100 border-stone-200 focus-visible:ring-green-600"
            />
          </div>

          <Sheet open={cartOpen} onOpenChange={setCartOpen}>
            <SheetTrigger asChild>
              <Button className="h-11 rounded-full gap-2 bg-green-700 hover:bg-green-800 relative">
                <ShoppingCart className="w-4 h-4" />
                <span className="hidden sm:inline">Cart</span>
                {cartCount > 0 && (
                  <Badge className="ml-1 bg-yellow-400 text-green-900 hover:bg-yellow-400">{cartCount}</Badge>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent className="flex flex-col w-full sm:max-w-md p-0">
              <SheetHeader className="px-5 py-4 border-b">
                <SheetTitle className="flex items-center gap-2"><ShoppingCart className="w-5 h-5" /> Your Cart ({cartCount})</SheetTitle>
              </SheetHeader>

              {cartItems.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center px-8 gap-3">
                  <div className="w-24 h-24 rounded-full bg-stone-100 flex items-center justify-center">
                    <ShoppingCart className="w-10 h-10 text-stone-400" />
                  </div>
                  <h3 className="font-semibold text-lg">Your cart is empty</h3>
                  <p className="text-sm text-muted-foreground">Add fresh groceries and essentials to get started.</p>
                  <Button onClick={() => setCartOpen(false)} className="bg-green-700 hover:bg-green-800 mt-2">Start Shopping</Button>
                </div>
              ) : (
                <>
                  <ScrollArea className="flex-1">
                    <div className="p-4 space-y-3">
                      {cartItems.map(i => (
                        <div key={i.id} className="flex gap-3 p-3 rounded-lg border bg-white">
                          <img src={i.image} alt={i.name} className="w-16 h-16 rounded-md object-cover bg-stone-100" />
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-semibold truncate">{i.name}</div>
                            <div className="text-xs text-muted-foreground truncate">{i.hindi} · {i.unit}</div>
                            <div className="mt-1 flex items-center justify-between">
                              <div className="font-bold text-green-800">{fmt(i.price * i.qty)}</div>
                              <div className="flex items-center gap-2 border rounded-full">
                                <button onClick={() => decrement(i.id)} className="p-1.5 hover:bg-stone-100 rounded-full"><Minus className="w-3 h-3" /></button>
                                <span className="text-sm w-6 text-center">{i.qty}</span>
                                <button onClick={() => addToCart(i)} className="p-1.5 hover:bg-stone-100 rounded-full"><Plus className="w-3 h-3" /></button>
                              </div>
                            </div>
                          </div>
                          <button onClick={() => removeFromCart(i.id)} className="text-stone-400 hover:text-red-600"><Trash2 className="w-4 h-4" /></button>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>

                  <div className="border-t p-4 space-y-2 bg-white">
                    <div className="flex justify-between text-sm"><span>Subtotal</span><span>{fmt(subtotal)}</span></div>
                    <div className="flex justify-between text-sm text-green-700"><span>You save</span><span>-{fmt(savings)}</span></div>
                    <div className="flex justify-between text-sm"><span>Delivery</span><span>{delivery === 0 ? 'FREE' : fmt(delivery)}</span></div>
                    <Separator />
                    <div className="flex justify-between font-bold text-lg"><span>Total</span><span>{fmt(total)}</span></div>
                    <Button className="w-full h-12 bg-green-700 hover:bg-green-800 text-base" onClick={() => { setCartOpen(false); setCheckoutOpen(true) }}>
                      Proceed to Checkout <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </>
              )}
            </SheetContent>
          </Sheet>
        </div>

        {/* Category strip */}
        <div className="border-t bg-white">
          <div className="container mx-auto px-4">
            <div className="flex gap-2 overflow-x-auto no-scrollbar py-2">
              <CategoryPill active={activeCategory === 'all'} onClick={() => setActiveCategory('all')} label="All" emoji="🛒" />
              {CATEGORIES.map(c => (
                <CategoryPill
                  key={c.slug}
                  active={activeCategory === c.slug}
                  onClick={() => setActiveCategory(c.slug)}
                  label={c.name}
                  emoji={c.emoji}
                />
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      {activeCategory === 'all' && !query && (
        <section className="container mx-auto px-4 pt-6">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-green-700 via-green-600 to-emerald-500 text-white p-8 md:p-12">
            <div className="relative z-10 max-w-xl">
              <Badge className="bg-yellow-400 text-green-900 hover:bg-yellow-400 mb-3">MONSOON MEGA SALE 🌧️</Badge>
              <h1 className="text-3xl md:text-5xl font-black leading-tight">Fresh Kirana,<br/>Delivered to Your Door.</h1>
              <p className="mt-3 text-green-50 text-base md:text-lg">Save up to 40% on dals, rice, oils, masalas & household items. Get free delivery above ₹500.</p>
              <div className="mt-5 flex gap-2">
                <Button size="lg" className="bg-white text-green-800 hover:bg-yellow-100 font-bold" onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}>
                  Shop Now <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">View Deals</Button>
              </div>
            </div>
            <div className="absolute right-0 top-0 h-full w-1/2 opacity-90 hidden md:block">
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=900&auto=format" alt="groceries" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-700 to-transparent" />
            </div>
          </div>

          {/* Value props */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            <ValueCard icon={<Truck className="w-5 h-5" />} title="Free Delivery" desc="On orders above ₹500" />
            <ValueCard icon={<Clock className="w-5 h-5" />} title="Same-day Delivery" desc="Order before 2 PM" />
            <ValueCard icon={<ShieldCheck className="w-5 h-5" />} title="100% Authentic" desc="Genuine brands only" />
            <ValueCard icon={<Store className="w-5 h-5" />} title="Local Trust" desc="Since 1985 · Jodhpur" />
          </div>
        </section>
      )}

      {/* Categories Grid */}
      {activeCategory === 'all' && !query && (
        <section className="container mx-auto px-4 py-8">
          <SectionHeader title="Shop by Category" subtitle="Everything for your kitchen & home" />
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {CATEGORIES.map(c => (
              <button key={c.slug} onClick={() => setActiveCategory(c.slug)} className={`group rounded-2xl bg-gradient-to-br ${c.color} p-4 flex flex-col items-center gap-2 border hover:shadow-md hover:-translate-y-0.5 transition-all`}>
                <div className="text-4xl group-hover:scale-110 transition-transform">{c.emoji}</div>
                <div className="text-xs font-semibold text-center text-stone-800 leading-tight">{c.name}</div>
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Best Deals */}
      {activeCategory === 'all' && !query && (
        <section className="container mx-auto px-4 py-4">
          <SectionHeader title="🔥 Best Deals" subtitle="Biggest savings, hand-picked for you" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {getBestDeals().map(p => (
              <ProductCard key={p.id} product={p} qty={cart[p.id] || 0} onAdd={() => addToCart(p)} onDec={() => decrement(p.id)} />
            ))}
          </div>
        </section>
      )}

      {/* Products */}
      <section id="shop" className="container mx-auto px-4 py-8">
        <SectionHeader
          title={query ? `Search: "${query}"` : (activeCategory === 'all' ? 'All Products' : CATEGORIES.find(c => c.slug === activeCategory)?.name)}
          subtitle={`${filteredProducts.length} products`}
        />
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            <div className="text-5xl mb-3">😕</div>
            <p>No products found. Try a different search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {filteredProducts.map(p => (
              <ProductCard key={p.id} product={p} qty={cart[p.id] || 0} onAdd={() => addToCart(p)} onDec={() => decrement(p.id)} />
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-green-100 mt-12">
        <div className="container mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-yellow-400 text-green-900 font-black flex items-center justify-center">JGK</div>
              <div className="font-black text-lg">JGK Kirana Store</div>
            </div>
            <p className="text-sm text-green-200 mt-3">Your neighbourhood grocery store, now online. Fresh, authentic and always affordable.</p>
          </div>
          <div>
            <h4 className="font-bold mb-3">Categories</h4>
            <ul className="space-y-1 text-sm text-green-200">
              {CATEGORIES.slice(0, 6).map(c => <li key={c.slug}><button onClick={() => setActiveCategory(c.slug)} className="hover:text-white">{c.name}</button></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Company</h4>
            <ul className="space-y-1 text-sm text-green-200">
              <li>About Us</li><li>Contact</li><li>Delivery Policy</li><li>Return Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Contact</h4>
            <p className="text-sm text-green-200 flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5" /> Sardarpura, Jodhpur, Rajasthan 342001</p>
            <p className="text-sm text-green-200 flex items-center gap-2 mt-1"><Phone className="w-4 h-4" /> +91 9876543210</p>
          </div>
        </div>
        <div className="border-t border-green-800 text-center py-4 text-xs text-green-300">© 2025 JGK Kirana Store · Built with ❤️ in Jodhpur</div>
      </footer>

      {/* Checkout Dialog */}
      <CheckoutDialog
        open={checkoutOpen}
        onOpenChange={setCheckoutOpen}
        items={cartItems}
        total={total}
        subtotal={subtotal}
        delivery={delivery}
        savings={savings}
        ordering={ordering}
        onPlace={async (form) => {
          setOrdering(true)
          try {
            const res = await fetch('/api/orders', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ ...form, items: cartItems, total, subtotal, delivery }),
            })
            const data = await res.json()
            if (!res.ok) throw new Error(data.error || 'Order failed')
            toast.success(`Order placed! ID: ${data.orderId}`, { description: 'We will call you to confirm shortly.' })
            clearCart()
            setCheckoutOpen(false)
          } catch (e) {
            toast.error(e.message)
          } finally {
            setOrdering(false)
          }
        }}
      />
    </div>
  )
}

function CategoryPill({ active, onClick, label, emoji }) {
  return (
    <button onClick={onClick} className={`shrink-0 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium border transition ${active ? 'bg-green-700 text-white border-green-700' : 'bg-white text-stone-700 border-stone-200 hover:border-green-600 hover:text-green-700'}`}>
      <span>{emoji}</span> {label}
    </button>
  )
}

function ValueCard({ icon, title, desc }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-white border">
      <div className="w-10 h-10 rounded-full bg-green-100 text-green-800 flex items-center justify-center">{icon}</div>
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-xs text-muted-foreground">{desc}</div>
      </div>
    </div>
  )
}

function SectionHeader({ title, subtitle }) {
  return (
    <div className="flex items-end justify-between mb-4">
      <div>
        <h2 className="text-xl md:text-2xl font-black text-stone-900">{title}</h2>
        {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
      </div>
    </div>
  )
}

function ProductCard({ product, qty, onAdd, onDec }) {
  return (
    <Card className="overflow-hidden group hover:shadow-lg transition">
      <div className="relative aspect-square bg-stone-100 overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition" />
        {product.discount > 0 && (
          <Badge className="absolute top-2 left-2 bg-red-600 hover:bg-red-600">-{product.discount}%</Badge>
        )}
      </div>
      <CardContent className="p-3">
        <div className="text-xs text-muted-foreground truncate">{product.hindi}</div>
        <div className="font-semibold text-sm mt-0.5 line-clamp-2 min-h-[2.5rem]">{product.name}</div>
        <div className="text-xs text-muted-foreground mt-1">{product.unit}</div>
        <div className="flex items-center justify-between mt-2">
          <div>
            <div className="font-black text-green-800">{fmt(product.price)}</div>
            {product.mrp > product.price && <div className="text-xs text-muted-foreground line-through">{fmt(product.mrp)}</div>}
          </div>
          {qty === 0 ? (
            <Button size="sm" onClick={onAdd} className="h-9 bg-green-700 hover:bg-green-800">
              <Plus className="w-3 h-3 mr-1" /> Add
            </Button>
          ) : (
            <div className="flex items-center gap-1 bg-green-700 text-white rounded-md">
              <button onClick={onDec} className="px-2 py-1.5 hover:bg-green-800 rounded-l-md"><Minus className="w-3 h-3" /></button>
              <span className="text-sm font-bold w-6 text-center">{qty}</span>
              <button onClick={onAdd} className="px-2 py-1.5 hover:bg-green-800 rounded-r-md"><Plus className="w-3 h-3" /></button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

function CheckoutDialog({ open, onOpenChange, items, total, subtotal, delivery, savings, ordering, onPlace }) {
  const [form, setForm] = useState({ name: '', phone: '', address: '', notes: '' })
  const submit = (e) => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.address) {
      toast.error('Please fill name, phone and address')
      return
    }
    onPlace(form)
  }
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2"><Sparkles className="w-5 h-5 text-yellow-500" /> Checkout — Cash on Delivery</DialogTitle>
        </DialogHeader>
        <form onSubmit={submit} className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label>Full Name *</Label>
              <Input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Ramesh Kumar" />
            </div>
            <div>
              <Label>Phone Number *</Label>
              <Input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} placeholder="+91 98XXXXXXXX" />
            </div>
          </div>
          <div>
            <Label>Delivery Address *</Label>
            <Textarea value={form.address} onChange={e => setForm({ ...form, address: e.target.value })} placeholder="House no., Street, Area, Landmark, City, Pincode" rows={2} />
          </div>
          <div>
            <Label>Notes (optional)</Label>
            <Input value={form.notes} onChange={e => setForm({ ...form, notes: e.target.value })} placeholder="Any special instructions" />
          </div>

          <div className="rounded-lg border bg-stone-50 p-3 text-sm space-y-1">
            <div className="font-bold mb-2">Order Summary ({items.length} items)</div>
            <div className="flex justify-between"><span>Subtotal</span><span>{fmt(subtotal)}</span></div>
            <div className="flex justify-between text-green-700"><span>Savings</span><span>-{fmt(savings)}</span></div>
            <div className="flex justify-between"><span>Delivery</span><span>{delivery === 0 ? 'FREE' : fmt(delivery)}</span></div>
            <Separator className="my-2" />
            <div className="flex justify-between font-black text-base"><span>Total</span><span>{fmt(total)}</span></div>
          </div>

          <DialogFooter>
            <Button type="submit" className="w-full h-12 bg-green-700 hover:bg-green-800 text-base" disabled={ordering || items.length === 0}>
              {ordering ? 'Placing order...' : `Place Order · ${fmt(total)}`}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default App