import { Resend } from 'resend';
import { NextResponse } from 'next/server';

function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.warn('RESEND_API_KEY not set — email not sent');
      return NextResponse.json({ ok: true, warn: 'no_api_key' });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: 'Anton LABUTIN Website <onboarding@resend.dev>',
      to: 'thevollga@gmail.com',
      replyTo: email,
      subject: `New inquiry from ${escapeHtml(name)}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #7c3aed;">New message from your website</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; color: #64748b; width: 80px;"><strong>Name</strong></td>
              <td style="padding: 8px;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px; color: #64748b;"><strong>Email</strong></td>
              <td style="padding: 8px;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
            </tr>
          </table>
          <div style="margin-top: 16px; padding: 16px; background: #f8fafc; border-radius: 8px; border-left: 4px solid #7c3aed;">
            <strong>Message:</strong><br/><br/>
            ${escapeHtml(message).replace(/\n/g, '<br/>')}
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
