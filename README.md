# Vektor Labs - Professional Website

A premium, conversion-focused website for Vektor Labs, a full-stack development and digital solutions company owned by Kevin Kipkoech. Built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Email Service**: Resend (server-side API)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Resend account with API key

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env.local` file in the root directory:

```env
RESEND_API_KEY=your_resend_api_key_here
FROM_EMAIL=noreply@yourdomain.com
TO_EMAIL=kevinkips611@gmail.com
```

**Important**: Never commit `.env.local` to Git. It's already in `.gitignore`.

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Import the project in Vercel
3. Add environment variables in Vercel dashboard:
   - `RESEND_API_KEY`
   - `FROM_EMAIL`
   - `TO_EMAIL`
4. Deploy

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Your Resend API key | Yes |
| `FROM_EMAIL` | Sender email address (must be verified in Resend) | Yes |
| `TO_EMAIL` | Recipient email address (kevinkips611@gmail.com) | Yes |

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts      # Secure contact form API
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── About.tsx
    ├── ContactForm.tsx
    ├── DevelopmentProcess.tsx
    ├── Footer.tsx
    ├── Hero.tsx
    ├── LeadCTA.tsx
    ├── Navbar.tsx
    ├── Projects.tsx
    ├── Services.tsx
    ├── Technologies.tsx
    └── WhyWorkWithMe.tsx
```

## Security Notes

- Resend API key is used server-side only
- No API keys are exposed to the client
- Server-side validation on all form submissions
- Environment variables are never committed to Git
- `.env.local` is in `.gitignore`

## Contact Form

The contact form sends project enquiries to kevinkips611@gmail.com via Resend. Each email includes:

- Client Name
- Email
- Phone
- Company/Business
- Service Requested
- Budget Range
- Project Description
- Timeline
- Additional Information
- Submission Date/Time

## SEO

The website includes:
- Proper meta tags
- Open Graph metadata
- Twitter Card metadata
- Semantic HTML structure
- Responsive design

## Performance

- Optimized images with Next.js Image component
- Static generation where possible
- Minimal JavaScript bundle
- CSS-in-JS with Tailwind CSS
- Lazy loading for non-critical content

## License

© 2026 Vektor Labs. All rights reserved.
