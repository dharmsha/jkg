import { NextResponse } from 'next/server';

// WhatsApp number (without +)
const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '917070853444';

function generateWhatsAppMessage(order) {
  const itemsList = order.items.map((item, index) => 
    `${index + 1}. ${item.name} × ${item.qty} = ₹${(item.price * item.qty).toFixed(2)}`
  ).join('\n');

  return `
🧾 *JGK Kirana Store - New Order*
━━━━━━━━━━━━━━━━━━━

👤 *Customer Details:*
Name: ${order.name}
Phone: ${order.phone}
Address: ${order.address}
${order.notes ? `Notes: ${order.notes}` : ''}

🛒 *Order Items:*
━━━━━━━━━━━━━━━━━━━
${itemsList}
━━━━━━━━━━━━━━━━━━━

💰 *Total Amount: ₹${order.total.toFixed(2)}*

📅 *Order Date: ${new Date().toLocaleString('en-IN')}*

🙏 *Thank you for shopping at JGK Kirana Store!*
  `.trim();
}

// GET - Health check
export async function GET() {
  return NextResponse.json({ 
    ok: true, 
    service: 'JGK Kirana API',
    whatsapp: WHATSAPP_NUMBER,
    message: 'Send POST request to place order'
  });
}

// POST - Place order
export async function POST(request) {
  try {
    console.log('📤 POST /api/orders');
    
    const body = await request.json();
    console.log('📦 Order Data:', body);

    // Validate required fields
    const required = ['name', 'phone', 'address', 'items'];
    const missing = required.filter(f => !body[f]);
    
    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Missing: ${missing.join(', ')}` },
        { status: 400 }
      );
    }

    if (!Array.isArray(body.items) || body.items.length === 0) {
      return NextResponse.json(
        { error: 'Cart is empty' },
        { status: 400 }
      );
    }

    // Create order object
    const order = {
      name: body.name,
      phone: body.phone,
      address: body.address,
      notes: body.notes || '',
      items: body.items.map(i => ({ 
        id: i.id, 
        name: i.name, 
        price: i.price, 
        qty: i.qty, 
        unit: i.unit || 'pcs'
      })),
      subtotal: body.subtotal || 0,
      delivery: body.delivery || 0,
      total: body.total || 0,
      orderId: 'JGK' + Date.now().toString().slice(-8),
      createdAt: new Date().toISOString()
    };

    // Generate WhatsApp message
    const message = generateWhatsAppMessage(order);
    const encodedMessage = encodeURIComponent(message);
    
    // ✅ UPDATED: API WhatsApp link (more reliable)
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}&type=phone_number&app_absent=0`;

    console.log('✅ Order processed:', order.orderId);
    console.log('📱 WhatsApp URL:', whatsappUrl);

    return NextResponse.json({
      success: true,
      orderId: order.orderId,
      whatsappUrl: whatsappUrl,
      message: 'Order ready!'
    });

  } catch (error) {
    console.error('❌ Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to process order' },
      { status: 500 }
    );
  }
}