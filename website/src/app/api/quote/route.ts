import { NextResponse } from 'next/server';
import { BUSINESS } from '@/lib/constants';
import { getMailer } from '@/lib/mail';
import { buildQuoteEmail } from '@/lib/quote-email';

export const runtime = 'nodejs';

const SERVICE_LABELS: Record<string, string> = {
  'junk-removal': 'Junk Removal',
  furniture: 'Furniture',
  appliance: 'Appliance',
  'yard-debris': 'Yard Debris',
  garage: 'Garage Cleanout',
  property: 'Property Cleanout',
  construction: 'Construction Debris',
  general: 'General Hauling',
};

function clean(value: unknown, max = 2000, allowNewlines = false) {
  const text = String(value ?? '').trim().slice(0, max);
  if (allowNewlines) {
    return text.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  }
  return text.replace(/[\r\n]+/g, ' ');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = clean(body.name, 120);
    const phone = clean(body.phone, 40);
    const email = clean(body.email, 120);
    const serviceKey = clean(body.service, 40);
    const message = clean(body.message, 4000, true);
    const service = SERVICE_LABELS[serviceKey] || serviceKey || 'Not specified';

    if (!name || !phone || !email) {
      return NextResponse.json({ error: 'Please fill in name, phone, and email.' }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }

    const to = 'sandoval.anthony909@yahoo.com';
    const fromUser = process.env.SMTP_USER;
    if (!fromUser) {
      return NextResponse.json({ error: 'Email is not configured.' }, { status: 500 });
    }

    const mailer = getMailer();
    const quoteEmail = buildQuoteEmail({
      name,
      phone,
      email,
      service,
      message: message || 'No details provided.',
    });

    await mailer.sendMail({
      from: `"${BUSINESS.name}" <${fromUser}>`,
      to,
      replyTo: `${name} <${email}>`,
      subject: quoteEmail.subject,
      text: quoteEmail.text,
      html: quoteEmail.html,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Quote email failed:', error instanceof Error ? error.message : 'unknown error');
    return NextResponse.json({ error: 'Could not send quote request. Please call or try again.' }, { status: 500 });
  }
}
