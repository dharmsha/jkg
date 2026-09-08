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
  Package, Heart, Star, Tag, Layers, Grid3x3, List,
  Apple, Droplets, Shirt, Sofa, Laptop, Gem, Home, Utensils,
} from 'lucide-react'
import { CATEGORIES, PRODUCTS, getByCategory, getFeatured, getBestDeals } from '@/lib/products'

const CART_KEY = 'mggm_cart_v1'
const fmt = (n) => `₹${n.toLocaleString('en-IN')}`

// 📱 WHATSAPP NUMBER - YAHAN APNA NUMBER DAALO
const WHATSAPP_NUMBER = '918840055833' // 👈 Example: 91 + 8840055833

function App() {
  const [cart, setCart] = useState({})
  const [cartOpen, setCartOpen] = useState(false)
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('all')
  const [query, setQuery] = useState('')
  const [ordering, setOrdering] = useState(false)
  const [viewMode, setViewMode] = useState('grid')

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
    toast.success(`${p.name} added to cart 🛒`)
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

  // Featured Categories for Mega Mall
  const megaCategories = [
    { name: 'Dal & Pulses', icon: '🫘', color: 'from-amber-500 to-amber-600' },
    { name: 'Rice & Grains', icon: '🍚', color: 'from-yellow-500 to-yellow-600' },
    { name: 'Masala & Spices', icon: '🌶️', color: 'from-red-500 to-red-600' },
    { name: 'Dry Fruits', icon: '🥜', color: 'from-rose-500 to-rose-600' },
    { name: 'Snacks', icon: '🍿', color: 'from-orange-500 to-orange-600' },
    { name: 'Personal Care', icon: '🧴', color: 'from-pink-500 to-pink-600' },
  ]

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Top Info Bar */}
      <div className="bg-amber-800 text-amber-50 text-xs">
        <div className="container mx-auto flex items-center justify-between h-8 px-4">
          <div className="flex items-center gap-4">
            <span className="hidden sm:flex items-center gap-1"><MapPin className="w-3 h-3" /> Goshainganj, Lucknow, UP 226001</span>
            <span className="flex items-center gap-1"><Phone className="w-3 h-3" /> +91 8840055833</span>
          </div>
          <span className="hidden md:block">🛍️ Mega Mall Sale - Up to 50% Off!</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-3 flex items-center gap-3 md:gap-6">
          <button onClick={() => { setActiveCategory('all'); setQuery('') }} className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-amber-600 shadow-md group-hover:shadow-lg transition-shadow">
              <Image
                src="/logo.png"
                alt="Maa Gayatri Goshainganj Mart"
                fill
                className="object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.parentElement.className = 'w-12 h-12 rounded-full bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-white font-black text-xl shadow'
                  e.currentTarget.parentElement.innerHTML = '🏬'
                }}
              />
            </div>
            <div className="leading-tight text-left">
              <div className="font-black text-base md:text-lg text-amber-800 tracking-tight">
                Maa Gayatri
                <span className="block text-xs md:text-sm font-bold text-amber-700">Goshainganj Mart</span>
              </div>
              <div className="text-[10px] text-muted-foreground hidden sm:block">🛍️ Mega Mall · Shop Everything!</div>
            </div>
          </button>

          <div className="flex-1 relative max-w-2xl">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder='🔍 Search thousands of products...'
              className="pl-9 pr-4 h-11 rounded-full bg-stone-100 border-stone-200 focus-visible:ring-amber-600"
            />
          </div>

          <Sheet open={cartOpen} onOpenChange={setCartOpen}>
            <SheetTrigger asChild>
              <Button className="h-11 rounded-full gap-2 bg-amber-700 hover:bg-amber-800 relative">
                <ShoppingCart className="w-4 h-4" />
                <span className="hidden sm:inline">Cart</span>
                {cartCount > 0 && (
                  <Badge className="ml-1 bg-yellow-400 text-amber-900 hover:bg-yellow-400">{cartCount}</Badge>
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
                  <p className="text-sm text-muted-foreground">Add products from our mega mall!</p>
                  <Button onClick={() => setCartOpen(false)} className="bg-amber-700 hover:bg-amber-800 mt-2">Start Shopping</Button>
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
                              <div className="font-bold text-amber-800">{fmt(i.price * i.qty)}</div>
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
                    <Button className="w-full h-12 bg-amber-700 hover:bg-amber-800 text-base" onClick={() => { setCartOpen(false); setCheckoutOpen(true) }}>
                      Proceed to Checkout <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </>
              )}
            </SheetContent>
          </Sheet>
        </div>

        {/* Category strip - ALL CATEGORIES */}
        <div className="border-t bg-white">
          <div className="container mx-auto px-4">
            <div className="flex gap-2 overflow-x-auto no-scrollbar py-2">
              <CategoryPill active={activeCategory === 'all'} onClick={() => setActiveCategory('all')} label="🏬 All" />
              {CATEGORIES.map(c => (
                <CategoryPill
                  key={c.slug}
                  active={activeCategory === c.slug}
                  onClick={() => setActiveCategory(c.slug)}
                  label={`${c.emoji} ${c.name}`}
                />
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      {activeCategory === 'all' && !query && (
        <>
          <section className="container mx-auto px-4 pt-6">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-amber-700 via-orange-600 to-red-500 text-white p-8 md:p-12">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 text-8xl">🏬</div>
                <div className="absolute bottom-10 right-10 text-8xl">🛍️</div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl opacity-20">M</div>
              </div>
              <div className="relative z-10 max-w-2xl">
                <Badge className="bg-yellow-400 text-amber-900 hover:bg-yellow-400 mb-3 text-sm px-4 py-1">
                  🎉 GRAND OPENING SALE!
                </Badge>
                <h1 className="text-3xl md:text-5xl font-black leading-tight">
                  Maa Gayatri <br className="hidden sm:block"/>
                  <span className="text-yellow-200">Goshainganj Mart</span>
                </h1>
                <p className="mt-3 text-lg font-semibold text-yellow-100">Your One-Stop Mega Mall! 🛍️</p>
                <p className="mt-1 text-amber-50 text-base">Groceries · Cosmetics · Clothing · Electronics · Home Decor · Kitchenware & More!</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button size="lg" className="bg-white text-amber-800 hover:bg-yellow-100 font-bold" onClick={() => document.getElementById('shop')?.scrollIntoView({ behavior: 'smooth' })}>
                    Explore Now <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                    View All Deals
                  </Button>
                </div>
              </div>
              <div className="absolute right-0 top-0 h-full w-1/2 opacity-90 hidden md:block">
                <div className="flex items-center justify-center h-full">
                  <div className="grid grid-cols-2 gap-4 p-8">
                    <div className="bg-white/20 backdrop-blur rounded-2xl p-4 text-center">
                      <div className="text-4xl">🛒</div>
                      <div className="text-sm font-bold mt-1">Groceries</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur rounded-2xl p-4 text-center">
                      <div className="text-4xl">💄</div>
                      <div className="text-sm font-bold mt-1">Cosmetics</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur rounded-2xl p-4 text-center">
                      <div className="text-4xl">👔</div>
                      <div className="text-sm font-bold mt-1">Clothing</div>
                    </div>
                    <div className="bg-white/20 backdrop-blur rounded-2xl p-4 text-center">
                      <div className="text-4xl">📱</div>
                      <div className="text-sm font-bold mt-1">Electronics</div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-700/50 to-transparent" />
              </div>
            </div>

            {/* Value props */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
              <ValueCard icon={<Truck className="w-5 h-5" />} title="Free Delivery" desc="On orders above ₹500" />
              <ValueCard icon={<Clock className="w-5 h-5" />} title="Same-day Delivery" desc="Order before 2 PM" />
              <ValueCard icon={<ShieldCheck className="w-5 h-5" />} title="100% Genuine" desc="Authentic products only" />
              <ValueCard icon={<Store className="w-5 h-5" />} title="Mega Store" desc="Since 1995 · Goshainganj" />
            </div>
          </section>

          {/* Shop by Department */}
          <section className="container mx-auto px-4 py-8">
            <SectionHeader title="🛍️ Shop by Department" subtitle="Everything you need under one roof" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {megaCategories.map((cat, idx) => (
                <div key={idx} className="group cursor-pointer" onClick={() => {
                  const catMap = {
                    'Dal & Pulses': 'dal-pulses',
                    'Rice & Grains': 'rice-grains',
                    'Masala & Spices': 'masala-spices',
                    'Dry Fruits': 'dry-fruits',
                    'Snacks': 'snacks',
                    'Personal Care': 'personal-care'
                  }
                  setActiveCategory(catMap[cat.name] || 'all')
                }}>
                  <div className={`bg-gradient-to-br ${cat.color} rounded-2xl p-6 flex flex-col items-center gap-3 text-white shadow-lg group-hover:scale-105 transition-all duration-300`}>
                    <span className="text-4xl">{cat.icon}</span>
                    <span className="text-xs font-bold text-center">{cat.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Deal of the Day */}
          <section className="container mx-auto px-4 py-4">
            <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-6 text-white">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <Badge className="bg-white text-red-600 hover:bg-white">🔥 HOT DEAL</Badge>
                  <h3 className="text-2xl font-black mt-2">Deal of the Day!</h3>
                  <p className="text-sm opacity-90">Hurry! Limited time offer</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-black">12</div>
                    <div className="text-xs">Hours</div>
                  </div>
                  <div className="text-3xl font-black">:</div>
                  <div className="text-center">
                    <div className="text-3xl font-black">45</div>
                    <div className="text-xs">Mins</div>
                  </div>
                  <div className="text-3xl font-black">:</div>
                  <div className="text-center">
                    <div className="text-3xl font-black">30</div>
                    <div className="text-xs">Secs</div>
                  </div>
                </div>
                <Button className="bg-white text-red-600 hover:bg-yellow-100 font-bold">
                  Shop Now <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Best Deals */}
      {activeCategory === 'all' && !query && (
        <section className="container mx-auto px-4 py-4">
          <SectionHeader title="⭐ Best Deals" subtitle="Biggest savings, hand-picked for you" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {getBestDeals().slice(0, 10).map(p => (
              <ProductCard key={p.id} product={p} qty={cart[p.id] || 0} onAdd={() => addToCart(p)} onDec={() => decrement(p.id)} />
            ))}
          </div>
        </section>
      )}

      {/* Products */}
      <section id="shop" className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
          <SectionHeader
            title={query ? `🔍 Search: "${query}"` : (activeCategory === 'all' ? '🛍️ All Products' : CATEGORIES.find(c => c.slug === activeCategory)?.name)}
            subtitle={`${filteredProducts.length} products found`}
          />
          <div className="flex items-center gap-2">
            <Button 
              variant={viewMode === 'grid' ? 'default' : 'outline'} 
              size="sm" 
              onClick={() => setViewMode('grid')}
              className={viewMode === 'grid' ? 'bg-amber-700 hover:bg-amber-800' : ''}
            >
              <Grid3x3 className="w-4 h-4" />
            </Button>
            <Button 
              variant={viewMode === 'list' ? 'default' : 'outline'} 
              size="sm"
              onClick={() => setViewMode('list')}
              className={viewMode === 'list' ? 'bg-amber-700 hover:bg-amber-800' : ''}
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            <div className="text-5xl mb-3">🔍</div>
            <p>No products found. Try a different search.</p>
          </div>
        ) : (
          <div className={viewMode === 'grid' 
            ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3" 
            : "space-y-3"
          }>
            {filteredProducts.map(p => (
              viewMode === 'grid' ? (
                <ProductCard key={p.id} product={p} qty={cart[p.id] || 0} onAdd={() => addToCart(p)} onDec={() => decrement(p.id)} />
              ) : (
                <ProductCardList key={p.id} product={p} qty={cart[p.id] || 0} onAdd={() => addToCart(p)} onDec={() => decrement(p.id)} />
              )
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-amber-100 mt-12">
        <div className="container mx-auto px-4 py-10 grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400">
                <Image
                  src="/logo.png"
                  alt="Maa Gayatri Goshainganj Mart"
                  fill
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.parentElement.className = 'w-12 h-12 rounded-full bg-yellow-400 text-amber-900 font-black flex items-center justify-center text-xl'
                    e.currentTarget.parentElement.innerHTML = '🏬'
                  }}
                />
              </div>
              <div>
                <div className="font-black text-base">Maa Gayatri</div>
                <div className="font-bold text-sm text-amber-300">Goshainganj Mart</div>
              </div>
            </div>
            <p className="text-sm text-amber-200 mt-3">Your one-stop mega mall in Goshainganj, Lucknow. Groceries, cosmetics, clothing, electronics & more!</p>
          </div>
          <div>
            <h4 className="font-bold mb-3">Quick Links</h4>
            <ul className="space-y-1 text-sm text-amber-200">
              {CATEGORIES.slice(0, 6).map(c => (
                <li key={c.slug}>
                  <button onClick={() => { setActiveCategory(c.slug); setQuery('') }} className="hover:text-white">
                    {c.emoji} {c.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Company</h4>
            <ul className="space-y-1 text-sm text-amber-200">
              <li>About Us</li>
              <li>Contact</li>
              <li>Delivery Policy</li>
              <li>Return Policy</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Contact</h4>
            <p className="text-sm text-amber-200 flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5" /> Goshainganj, Lucknow, UP 226001</p>
            <p className="text-sm text-amber-200 flex items-center gap-2 mt-1"><Phone className="w-4 h-4" /> +91 8840055833</p>
            <div className="flex gap-3 mt-3 text-2xl">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition">📱</a>
              <span>📧</span>
              <span>📸</span>
              <span>🐦</span>
            </div>
          </div>
        </div>
        <div className="border-t border-amber-800 text-center py-4 text-xs text-amber-300">
          © 2025 Maa Gayatri Goshainganj Mart · 🏬 Mega Mall · Built with ❤️ in Lucknow
        </div>
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
            toast.success(`🎉 Order placed! ID: ${data.orderId}`, { description: 'We will call you to confirm shortly.' })
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

// ============================================
// COMPONENTS
// ============================================

function CategoryPill({ active, onClick, label }) {
  return (
    <button 
      onClick={onClick} 
      className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-medium border transition whitespace-nowrap ${
        active 
          ? 'bg-amber-700 text-white border-amber-700 shadow-md' 
          : 'bg-white text-stone-700 border-stone-200 hover:border-amber-600 hover:text-amber-700 hover:shadow'
      }`}
    >
      {label}
    </button>
  )
}

function ValueCard({ icon, title, desc }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-white border shadow-sm hover:shadow-md transition">
      <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center">{icon}</div>
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

// ============================================
// 🟢 PRODUCT CARD WITH WHATSAPP BUTTON
// ============================================
function ProductCard({ product, qty, onAdd, onDec }) {
  const phoneNumber = WHATSAPP_NUMBER
  const whatsappMessage = `Hello Maa Gayatri Goshainganj Mart! I want to order ${product.name} - ₹${product.price} (${product.unit})`
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 border hover:border-amber-300">
      <div className="relative aspect-square bg-stone-100 overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
        {product.discount > 0 && (
          <Badge className="absolute top-2 left-2 bg-red-600 hover:bg-red-600 text-white px-2 py-1">
            -{product.discount}%
          </Badge>
        )}
        {product.discount >= 30 && (
          <Badge className="absolute bottom-2 left-2 bg-yellow-400 text-amber-900 hover:bg-yellow-400">
            🔥 Best Deal
          </Badge>
        )}
      </div>
      <CardContent className="p-3">
        <div className="text-xs text-muted-foreground truncate">{product.hindi}</div>
        <div className="font-semibold text-sm mt-0.5 line-clamp-2 min-h-[2.5rem]">{product.name}</div>
        <div className="flex items-center gap-1 mt-1">
          <span className="text-xs text-muted-foreground">{product.unit}</span>
          <span className="text-[10px] text-green-600 ml-auto">⭐ 4.5</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div>
            <div className="font-black text-amber-800">{fmt(product.price)}</div>
            {product.mrp > product.price && <div className="text-xs text-muted-foreground line-through">{fmt(product.mrp)}</div>}
          </div>
          {qty === 0 ? (
            <Button size="sm" onClick={onAdd} className="h-9 bg-amber-700 hover:bg-amber-800 text-white">
              <Plus className="w-3 h-3 mr-1" /> Add
            </Button>
          ) : (
            <div className="flex items-center gap-1 bg-amber-700 text-white rounded-md">
              <button onClick={onDec} className="px-2 py-1.5 hover:bg-amber-800 rounded-l-md"><Minus className="w-3 h-3" /></button>
              <span className="text-sm font-bold w-6 text-center">{qty}</span>
              <button onClick={onAdd} className="px-2 py-1.5 hover:bg-amber-800 rounded-r-md"><Plus className="w-3 h-3" /></button>
            </div>
          )}
        </div>
        
        {/* 🔥 WHATSAPP BUTTON */}
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-2 rounded-lg transition-all duration-300"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Order on WhatsApp
        </a>
      </CardContent>
    </Card>
  )
}

function ProductCardList({ product, qty, onAdd, onDec }) {
  const phoneNumber = WHATSAPP_NUMBER
  const whatsappMessage = `Hello Maa Gayatri Goshainganj Mart! I want to order ${product.name} - ₹${product.price} (${product.unit})`
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="flex gap-4 p-4 bg-white rounded-xl border hover:shadow-md transition">
      <div className="w-24 h-24 rounded-lg bg-stone-100 overflow-hidden shrink-0">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <div className="text-xs text-muted-foreground">{product.hindi}</div>
          <div className="font-semibold">{product.name}</div>
          <div className="text-xs text-muted-foreground">{product.unit}</div>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <div className="font-black text-amber-800">{fmt(product.price)}</div>
            {product.mrp > product.price && <div className="text-xs text-muted-foreground line-through">{fmt(product.mrp)}</div>}
          </div>
          {qty === 0 ? (
            <Button size="sm" onClick={onAdd} className="bg-amber-700 hover:bg-amber-800 text-white">
              <Plus className="w-3 h-3 mr-1" /> Add
            </Button>
          ) : (
            <div className="flex items-center gap-1 bg-amber-700 text-white rounded-md">
              <button onClick={onDec} className="px-2 py-1.5 hover:bg-amber-800 rounded-l-md"><Minus className="w-3 h-3" /></button>
              <span className="text-sm font-bold w-6 text-center">{qty}</span>
              <button onClick={onAdd} className="px-2 py-1.5 hover:bg-amber-800 rounded-r-md"><Plus className="w-3 h-3" /></button>
            </div>
          )}
        </div>
      </div>
      {/* 🔥 WHATSAPP BUTTON - LIST VIEW */}
      <a 
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="shrink-0 flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-3 py-2 rounded-lg transition"
      >
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        WhatsApp
      </a>
    </div>
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
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-500" /> 
            Checkout — Cash on Delivery 🏬
          </DialogTitle>
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
            <div className="font-bold mb-2">📋 Order Summary ({items.length} items)</div>
            <div className="flex justify-between"><span>Subtotal</span><span>{fmt(subtotal)}</span></div>
            <div className="flex justify-between text-green-700"><span>💰 Savings</span><span>-{fmt(savings)}</span></div>
            <div className="flex justify-between"><span>🚚 Delivery</span><span>{delivery === 0 ? 'FREE' : fmt(delivery)}</span></div>
            <Separator className="my-2" />
            <div className="flex justify-between font-black text-base"><span>Total</span><span>{fmt(total)}</span></div>
          </div>

          <DialogFooter>
            <Button type="submit" className="w-full h-12 bg-amber-700 hover:bg-amber-800 text-base" disabled={ordering || items.length === 0}>
              {ordering ? '⏳ Placing order...' : `🛍️ Place Order · ${fmt(total)}`}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default App