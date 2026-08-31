import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'
import { v4 as uuidv4 } from 'uuid'

const uri = process.env.MONGO_URL
const dbName = process.env.DB_NAME || 'jgk_kirana'

let cachedClient = null
async function getDb() {
  if (cachedClient) return cachedClient.db(dbName)
  cachedClient = new MongoClient(uri)
  await cachedClient.connect()
  return cachedClient.db(dbName)
}

function json(data, status = 200) {
  return NextResponse.json(data, { status })
}

export async function GET(request, { params }) {
  const p = await params
  const path = (p?.path || []).join('/')
  try {
    if (path === '' || path === 'health') {
      return json({ ok: true, service: 'jgk-kirana-api', ts: new Date().toISOString() })
    }
    if (path === 'orders') {
      const db = await getDb()
      const list = await db.collection('orders').find({}, { projection: { _id: 0 } }).sort({ createdAt: -1 }).limit(50).toArray()
      return json({ orders: list })
    }
    return json({ error: 'Not found' }, 404)
  } catch (e) {
    return json({ error: e.message }, 500)
  }
}

export async function POST(request, { params }) {
  const p = await params
  const path = (p?.path || []).join('/')
  try {
    const body = await request.json()
    if (path === 'orders') {
      if (!body.name || !body.phone || !body.address) {
        return json({ error: 'Missing required fields' }, 400)
      }
      if (!Array.isArray(body.items) || body.items.length === 0) {
        return json({ error: 'Cart is empty' }, 400)
      }
      const db = await getDb()
      const orderId = 'JGK' + Date.now().toString().slice(-8)
      const order = {
        id: uuidv4(),
        orderId,
        name: body.name,
        phone: body.phone,
        address: body.address,
        notes: body.notes || '',
        items: body.items.map(i => ({ id: i.id, name: i.name, price: i.price, qty: i.qty, unit: i.unit })),
        subtotal: body.subtotal || 0,
        delivery: body.delivery || 0,
        total: body.total || 0,
        status: 'pending',
        createdAt: new Date().toISOString(),
      }
      await db.collection('orders').insertOne(order)
      return json({ ok: true, orderId, id: order.id })
    }
    return json({ error: 'Not found' }, 404)
  } catch (e) {
    return json({ error: e.message }, 500)
  }
}
