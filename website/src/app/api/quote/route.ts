import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, service, message } = body;

    // Validate required fields
    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get SMTP credentials from environment variables
    const smtpEmail = process.env.SMTP_EMAIL;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const recipientEmail = process.env.RECIPIENT_EMAIL;

    if (!smtpEmail || !smtpPassword || !recipientEmail) {
      console.error('SMTP configuration missing in environment variables');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: smtpEmail,
        pass: smtpPassword, // Google App Password
      },
    });

    // Format service type for display
    const serviceDisplay = service 
      ? service.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
      : 'Not specified';

    // Email content with professional HTML template
    const mailOptions = {
      from: smtpEmail,
      to: recipientEmail,
      subject: `🚛 New Quote Request from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Quote Request</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f5f5f5;">
          <table role="presentation" style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 20px 0;">
                <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.1);">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background: linear-gradient(135deg, #C48376 0%, #A96D62 100%); padding: 30px 40px; text-align: center;">
                      <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">
                        🚛 New Quote Request
                      </h1>
                      <p style="margin: 8px 0 0 0; color: #ffffff; font-size: 14px; opacity: 0.95;">
                        Sandoval Commercial Disposal
                      </p>
                    </td>
                  </tr>

                  <!-- Alert Banner -->
                  <tr>
                    <td style="background-color: #FFF3CD; border-left: 4px solid #FFC107; padding: 15px 40px;">
                      <p style="margin: 0; color: #856404; font-size: 14px; font-weight: 600;">
                        ⚡ Action Required: A new customer is waiting for your quote!
                      </p>
                    </td>
                  </tr>

                  <!-- Customer Information -->
                  <tr>
                    <td style="padding: 30px 40px;">
                      <h2 style="margin: 0 0 20px 0; color: #2c3e50; font-size: 20px; font-weight: 600; border-bottom: 2px solid #C48376; padding-bottom: 10px;">
                        Customer Information
                      </h2>
                      
                      <table role="presentation" style="width: 100%; border-collapse: collapse;">
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                            <span style="display: inline-block; width: 140px; color: #6c757d; font-size: 14px; font-weight: 600;">👤 Name:</span>
                            <span style="color: #2c3e50; font-size: 16px; font-weight: 500;">${name}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                            <span style="display: inline-block; width: 140px; color: #6c757d; font-size: 14px; font-weight: 600;">📱 Phone:</span>
                            <a href="tel:${phone.replace(/\D/g, '')}" style="color: #C48376; font-size: 16px; font-weight: 500; text-decoration: none;">${phone}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef;">
                            <span style="display: inline-block; width: 140px; color: #6c757d; font-size: 14px; font-weight: 600;">📧 Email:</span>
                            <a href="mailto:${email}" style="color: #C48376; font-size: 16px; font-weight: 500; text-decoration: none;">${email}</a>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 0;">
                            <span style="display: inline-block; width: 140px; color: #6c757d; font-size: 14px; font-weight: 600;">🔧 Service Type:</span>
                            <span style="color: #2c3e50; font-size: 16px; font-weight: 500;">${serviceDisplay}</span>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Project Details -->
                  ${message ? `
                  <tr>
                    <td style="padding: 0 40px 30px 40px;">
                      <h2 style="margin: 0 0 15px 0; color: #2c3e50; font-size: 20px; font-weight: 600; border-bottom: 2px solid #C48376; padding-bottom: 10px;">
                        Project Details
                      </h2>
                      <div style="background-color: #f8f9fa; border-left: 4px solid #C48376; padding: 20px; border-radius: 6px;">
                        <p style="margin: 0; color: #2c3e50; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                      </div>
                    </td>
                  </tr>
                  ` : ''}

                  <!-- Quick Actions -->
                  <tr>
                    <td style="padding: 0 40px 30px 40px;">
                      <h3 style="margin: 0 0 15px 0; color: #2c3e50; font-size: 16px; font-weight: 600;">
                        Quick Actions
                      </h3>
                      <table role="presentation" style="width: 100%;">
                        <tr>
                          <td style="padding: 0 10px 0 0; width: 50%;">
                            <a href="tel:${phone.replace(/\D/g, '')}" style="display: block; background-color: #C48376; color: #ffffff; text-align: center; padding: 14px 20px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
                              📞 Call Customer
                            </a>
                          </td>
                          <td style="padding: 0 0 0 10px; width: 50%;">
                            <a href="mailto:${email}" style="display: block; background-color: #2c3e50; color: #ffffff; text-align: center; padding: 14px 20px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
                              ✉️ Reply via Email
                            </a>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background-color: #f8f9fa; padding: 20px 40px; text-align: center; border-top: 1px solid #e9ecef;">
                      <p style="margin: 0; color: #6c757d; font-size: 13px;">
                        This quote request was submitted on <strong>${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</strong> at <strong>${new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}</strong>
                      </p>
                      <p style="margin: 10px 0 0 0; color: #6c757d; font-size: 12px;">
                        Sandoval Commercial Disposal • Southern California Junk Removal
                      </p>
                    </td>
                  </tr>

                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
      replyTo: email, // Allow easy reply to the customer
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Quote request sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send quote request' },
      { status: 500 }
    );
  }
}
