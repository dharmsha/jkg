// lib/whatsapp.js

const PHONE_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '918840055833';

/**
 * Generate WhatsApp URL with message
 * @param {string} message - The message to send
 * @returns {string} WhatsApp URL
 */
export const getWhatsAppUrl = (message) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
};

/**
 * Open WhatsApp with the message
 * @param {string} message - The message to send
 */
export const openWhatsApp = (message) => {
  const url = getWhatsAppUrl(message);
  window.open(url, '_blank');
};

/**
 * Generate order summary from cart items
 * @param {Array} cartItems - Array of cart items
 * @param {number} total - Total amount
 * @param {Object} customerInfo - Customer details
 * @returns {string} Formatted message
 */
export const generateOrderMessage = (cartItems, total, customerInfo = {}) => {
  const itemsList = cartItems.map((item, index) => 
    `${index + 1}. ${item.name} × ${item.quantity} = ₹${(item.price * item.quantity).toFixed(2)}`
  ).join('\n');

  const date = new Date().toLocaleString('en-IN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return `
🧾 *JGK Kirana Store - New Order*
━━━━━━━━━━━━━━━━━━━

👤 *Customer Details:*
${customerInfo.name ? `Name: ${customerInfo.name}` : ''}
${customerInfo.phone ? `Phone: ${customerInfo.phone}` : ''}
${customerInfo.address ? `Address: ${customerInfo.address}` : ''}

🛒 *Order Items:*
━━━━━━━━━━━━━━━━━━━
${itemsList}
━━━━━━━━━━━━━━━━━━━

💰 *Total Amount: ₹${total.toFixed(2)}*

📅 *Order Date: ${date}*

🙏 *Thank you for shopping at JGK Kirana Store!*
  `.trim();
};