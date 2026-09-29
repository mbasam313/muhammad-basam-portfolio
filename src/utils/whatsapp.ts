import { CONTACT_INFO } from '@/data/site';

export function buildWhatsAppUrl(message: string): string {
  const number = CONTACT_INFO.whatsapp.replace(/[^0-9]/g, '');
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${number}?text=${encoded}`;
}

export function buildPricingMessage(planName: string, serviceName: string, price: string, period: string): string {
  return `Hi Muhammad Basam,

I'm interested in the following pricing plan:

Plan: ${planName}
Service: ${serviceName}
Price: ${price} (${period})

I'd like to discuss this further. Can you share more details?`;
}

export function buildContactMessage(name: string, email: string, subject: string, message: string): string {
  return `Hi Muhammad Basam,

I'd like to get in touch with you.

Name: ${name}
Email: ${email}
Subject: ${subject}

${message}`;
}
