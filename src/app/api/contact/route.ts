import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const {
      fullName,
      email,
      phone,
      company,
      service,
      budget,
      timeline,
      projectDescription,
      additionalInfo,
    } = body

    // Server-side validation
    if (!fullName || !email || !service || !projectDescription) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    if (!resend) {
      console.error('Resend API key not configured')
      return NextResponse.json(
        { error: 'Email service not configured. Please contact us at 0740272542, 0798350035, or kevinkips611@gmail.com.' },
        { status: 500 }
      )
    }

    const fromEmail = process.env.FROM_EMAIL || 'noreply@vektorlabs.com'
    const toEmail = process.env.TO_EMAIL || 'kevinkips611@gmail.com'

    const submissionDate = new Date().toLocaleString('en-US', {
      timeZone: 'Africa/Nairobi',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    })

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Project Enquiry</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .header {
            background: linear-gradient(135deg, #2F80FF 0%, #1a5fc8 100%);
            color: white;
            padding: 30px;
            border-radius: 8px 8px 0 0;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
          .content {
            background: #ffffff;
            padding: 30px;
            border-radius: 0 0 8px 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          }
          .field {
            margin-bottom: 20px;
          }
          .field-label {
            font-weight: 600;
            color: #555;
            margin-bottom: 5px;
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          .field-value {
            color: #333;
            font-size: 16px;
            padding: 10px;
            background: #f8f9fa;
            border-radius: 4px;
            border-left: 3px solid #2F80FF;
          }
          .footer {
            text-align: center;
            margin-top: 30px;
            color: #666;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>New Website Project Enquiry — Vektor Labs</h1>
        </div>
        <div class="content">
          <div class="field">
            <div class="field-label">Client Name</div>
            <div class="field-value">${fullName}</div>
          </div>
          <div class="field">
            <div class="field-label">Email</div>
            <div class="field-value">${email}</div>
          </div>
          ${phone ? `
          <div class="field">
            <div class="field-label">Phone</div>
            <div class="field-value">${phone}</div>
          </div>
          ` : ''}
          ${company ? `
          <div class="field">
            <div class="field-label">Company/Business</div>
            <div class="field-value">${company}</div>
          </div>
          ` : ''}
          <div class="field">
            <div class="field-label">Service Requested</div>
            <div class="field-value">${service}</div>
          </div>
          ${budget ? `
          <div class="field">
            <div class="field-label">Budget Range</div>
            <div class="field-value">${budget}</div>
          </div>
          ` : ''}
          ${timeline ? `
          <div class="field">
            <div class="field-label">Preferred Timeline</div>
            <div class="field-value">${timeline}</div>
          </div>
          ` : ''}
          <div class="field">
            <div class="field-label">Project Description</div>
            <div class="field-value">${projectDescription}</div>
          </div>
          ${additionalInfo ? `
          <div class="field">
            <div class="field-label">Additional Message</div>
            <div class="field-value">${additionalInfo}</div>
          </div>
          ` : ''}
          <div class="field">
            <div class="field-label">Submission Date</div>
            <div class="field-value">${submissionDate}</div>
          </div>
        </div>
        <div class="footer">
          <p>This enquiry was submitted through the Vektor Labs website contact form.</p>
        </div>
      </body>
      </html>
    `

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `New Website Project Enquiry — Vektor Labs`,
      html: htmlContent,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again or contact us at 0740272542, 0798350035, or kevinkips611@gmail.com.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Email sent successfully', data },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'An error occurred. Please try again or contact us at 0740272542, 0798350035, or kevinkips611@gmail.com.' },
      { status: 500 }
    )
  }
}
