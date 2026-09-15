import nodemailer from 'nodemailer';

export function getMailConfig() {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.replace(/\s+/g, '');

  return { host, port, user, pass };
}

export function getMailer() {
  const { host, port, user, pass } = getMailConfig();

  if (!user || !pass) {
    throw new Error('SMTP_USER and SMTP_PASS must be set in environment variables');
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    requireTLS: port === 587,
    auth: { user, pass },
    connectionTimeout: 15_000,
    greetingTimeout: 15_000,
    socketTimeout: 20_000,
  });
}
