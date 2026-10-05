# Deployment Guide

## Vercel Deployment Steps

### 1. Prepare Your Repository

Ensure your code is pushed to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/your-repo.git
git push -u origin main
```

### 2. Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in/up
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will automatically detect Next.js

### 3. Configure Environment Variables

In Vercel project settings → Environment Variables:

Add the following:

| Key | Value | Environment |
|-----|-------|-------------|
| `RESEND_API_KEY` | Your Resend API key | Production, Preview, Development |
| `FROM_EMAIL` | noreply@yourdomain.com | Production, Preview, Development |
| `TO_EMAIL` | kevinkips611@gmail.com | Production, Preview, Development |

**Important**: Get your Resend API key from [resend.com](https://resend.com)

### 4. Configure Custom Domain (Optional)

1. In Vercel project settings → Domains
2. Add your custom domain
3. Update DNS records as instructed by Vercel

### 5. Update URLs

After deployment, update these files with your actual domain:

- `public/sitemap.xml` - Replace `https://yourdomain.com` with your actual domain
- `public/robots.txt` - Replace `https://yourdomain.com` with your actual domain
- `src/app/layout.tsx` - Update metadata URLs if needed

### 6. Test the Deployment

1. Visit your deployed site
2. Test the contact form
3. Check that emails are being sent to kevinkips611@gmail.com
4. Test on mobile devices
5. Verify all pages load correctly

## Resend Setup

### Get API Key

1. Sign up at [resend.com](https://resend.com)
2. Go to API Keys section
3. Create a new API key
4. Copy the key and add to Vercel environment variables

### Verify Sender Domain

1. In Resend dashboard, go to Domains
2. Add your domain (e.g., yourdomain.com)
3. Verify the domain by adding DNS records
4. Once verified, you can send emails from that domain

**Note**: For testing, you can use Resend's default domain initially.

## Troubleshooting

### Build Errors

If build fails:
- Check environment variables are set correctly
- Ensure all dependencies are installed
- Run `npm run build` locally first

### Email Not Sending

If contact form fails:
- Verify `RESEND_API_KEY` is correct
- Check sender domain is verified in Resend
- Check Vercel function logs for errors
- Ensure `TO_EMAIL` is set to kevinkips611@gmail.com

### Styling Issues

If styles don't load:
- Clear browser cache
- Check Tailwind CSS is properly configured
- Verify `globals.css` is imported in layout

## Performance Optimization

The site is already optimized with:
- Static generation for most pages
- Minimal JavaScript bundle
- Optimized images
- CSS-in-JS with Tailwind

## Security Checklist

- [ ] Environment variables are set in Vercel (not in code)
- [ ] `.env.local` is in `.gitignore`
- [ ] No API keys in the codebase
- [ ] HTTPS is enabled (automatic on Vercel)
- [ ] Contact form has server-side validation
- [ ] Resend API key is server-side only

## Post-Deployment

1. Monitor Vercel analytics
2. Check email delivery rates in Resend dashboard
3. Test contact form periodically
4. Update content as needed
5. Add project screenshots when available
