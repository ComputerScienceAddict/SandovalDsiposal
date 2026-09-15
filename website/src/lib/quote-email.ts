import { BUSINESS } from '@/lib/constants';

export function buildQuoteEmail(input: {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}) {
  const receivedAt = new Date().toLocaleString('en-US', {
    timeZone: 'America/Los_Angeles',
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });

  const phoneDigits = input.phone.replace(/\D/g, '');
  const telHref = phoneDigits ? `tel:${phoneDigits}` : `tel:${encodeURIComponent(input.phone)}`;
  const mailHref = `mailto:${encodeURIComponent(input.email)}`;

  const text = [
    `NEW QUOTE REQUEST — ${BUSINESS.name}`,
    receivedAt,
    '',
    `Name: ${input.name}`,
    `Phone: ${input.phone}`,
    `Email: ${input.email}`,
    `Service: ${input.service}`,
    '',
    'Project details:',
    input.message,
  ].join('\n');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>New quote request</title>
</head>
<body style="margin:0;padding:0;background-color:#1c1917;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#1c1917;margin:0;padding:0;">
    <tr>
      <td align="center" style="padding:28px 12px;">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;background-color:#F5ECD6;border-radius:20px;overflow:hidden;">
          <tr>
            <td style="background-color:#C48376;padding:8px 0;font-size:0;line-height:8px;">&nbsp;</td>
          </tr>
          <tr>
            <td style="padding:28px 32px 18px 32px;background-color:#F5ECD6;">
              <p style="margin:0 0 6px 0;font-family:Georgia,'Times New Roman',serif;font-size:12px;letter-spacing:2.4px;text-transform:uppercase;color:#A96D62;font-weight:bold;">
                Sandoval Commercial Disposal
              </p>
              <h1 style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:30px;line-height:1.15;color:#1c1917;font-weight:800;">
                New quote request
              </h1>
              <p style="margin:10px 0 0 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#57534e;">
                ${escapeHtml(receivedAt)} · Southern California
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 22px 32px;background-color:#F5ECD6;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#E8DCC4;border-radius:16px;">
                <tr>
                  <td style="padding:20px 22px;">
                    ${detailRow('Customer', input.name)}
                    ${detailRow('Phone', `<a href="${telHref}" style="color:#1c1917;text-decoration:none;font-weight:700;">${escapeHtml(input.phone)}</a>`)}
                    ${detailRow('Email', `<a href="${mailHref}" style="color:#A96D62;text-decoration:none;font-weight:700;">${escapeHtml(input.email)}</a>`)}
                    ${detailRow('Service', input.service, true)}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 24px 32px;background-color:#F5ECD6;">
              <p style="margin:0 0 8px 0;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:1.8px;text-transform:uppercase;color:#A96D62;font-weight:bold;">
                Project details
              </p>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#ffffff;border-radius:16px;border:1px solid #e7dcc4;">
                <tr>
                  <td style="padding:18px 20px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#1c1917;white-space:pre-wrap;">
                    ${escapeHtml(input.message)}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 28px 32px;background-color:#F5ECD6;" align="center">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="padding-right:8px;">
                    <a href="${telHref}" style="display:inline-block;background-color:#C48376;color:#ffffff;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;text-decoration:none;padding:14px 22px;border-radius:999px;">
                      Call ${escapeHtml(input.phone)}
                    </a>
                  </td>
                  <td style="padding-left:8px;">
                    <a href="${mailHref}" style="display:inline-block;background-color:#1c1917;color:#F5ECD6;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:700;text-decoration:none;padding:14px 22px;border-radius:999px;">
                      Reply by email
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background-color:#6B4039;padding:22px 32px;text-align:center;">
              <p style="margin:0 0 4px 0;font-family:Arial,Helvetica,sans-serif;font-size:15px;font-weight:700;color:#F5ECD6;">
                ${escapeHtml(BUSINESS.name)}
              </p>
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.5;color:#E8DCC4;">
                ${escapeHtml(BUSINESS.phone)} · ${escapeHtml(BUSINESS.hours)}<br />
                ${escapeHtml(BUSINESS.serviceArea)}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return {
    subject: `New quote request — ${input.name}`,
    text,
    html,
  };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function detailRow(label: string, value: string, last = false) {
  const content = value.includes('<a ') ? value : escapeHtml(value);
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="${last ? '' : 'border-bottom:1px solid #d9cbb0;'}">
      <tr>
        <td style="padding:${last ? '12px 0 0 0' : '12px 0'};width:92px;font-family:Arial,Helvetica,sans-serif;font-size:11px;letter-spacing:1.4px;text-transform:uppercase;color:#A96D62;font-weight:bold;vertical-align:top;">
          ${escapeHtml(label)}
        </td>
        <td style="padding:${last ? '10px 0 0 0' : '10px 0'};font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#1c1917;font-weight:700;vertical-align:top;">
          ${content}
        </td>
      </tr>
    </table>
  `;
}
