# LaunchPad: Next.js SaaS Boilerplate

Welcome to LaunchPad, a comprehensive and customizable SaaS boilerplate built with Next.js, TypeScript, and Tailwind CSS. LaunchPad provides you with a solid foundation to kickstart your SaaS project, offering a range of features and customizable components out of the box.

## Features

- 🚀 Next.js 14 with App Router
- 💎 TypeScript for type safety
- 🎨 Tailwind CSS for styling
- 🔐 NextAuth.js for authentication
- 📧 Email integration with Resend and React Email
- 💳 Stripe integration for payments
- 🗃️ Prisma ORM with PostgreSQL
- 🖼️ Multiple customizable login designs
- 🚦 Role-based access control
- 📊 SEO optimization
- 📱 Responsive design

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn
- PostgreSQL database

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/launchpad.git
   cd launchpad
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Copy the `.env.example` file to `.env.local` and fill in your values:
   ```bash
   cp .env.example .env.local
   ```

4. Set up the database:
   ```bash
   npx prisma migrate dev
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

Visit `http://localhost:3000` to see your application running.

## Authentication

LaunchPad uses NextAuth.js for authentication, supporting various providers including email/password, Google, GitHub, and more.

### Configuring Providers

Edit `src/app/api/auth/[...nextauth]/route.ts` to add or remove authentication providers:

```typescript
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import GitHubProvider from "next-auth/providers/github"
import EmailProvider from "next-auth/providers/email"

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
    }),
  ],
  // ... other options
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
```

## Login Designs

LaunchPad comes with multiple pre-built login designs that you can easily switch between or customize.

### Using Login Designs

In your sign-in page (`src/app/auth/signin/page.tsx`):

```typescript
import { getProviders, getCsrfToken } from 'next-auth/react'
import { loginDesigns, LoginDesignKey } from '@/config/loginDesigns'

export default async function SignIn({ searchParams }) {
  const providers = await getProviders()
  const csrfToken = await getCsrfToken()
  const designKey = (searchParams?.design as LoginDesignKey) || 'design1'
  const SelectedDesign = loginDesigns[designKey].component

  return <SelectedDesign csrfToken={csrfToken} providers={providers} />
}
```

### Available Designs

- `design1`: Modern Split Screen

### Adding Custom Designs

1. Create a new component in `src/components/auth/designs/`
2. Add the new design to `src/config/loginDesigns.ts`

## Email Integration

LaunchPad uses Resend for email delivery and React Email for email templates.

### Sending Emails

```typescript
import resend from '@/lib/resend'
import WelcomeEmail from '@/emails/WelcomeEmail'

const { data, error } = await resend.emails.send({
  from: 'onboarding@yourdomain.com',
  to: 'user@example.com',
  subject: 'Welcome to LaunchPad',
  react: <WelcomeEmail username="John Doe" />,
})
```

## Stripe Integration

LaunchPad includes Stripe integration for handling payments and subscriptions.

### Setting Up Stripe

1. Add your Stripe keys to `.env.local`:
   ```
   STRIPE_PUBLIC_KEY=your_stripe_public_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

2. Use the Stripe client in your components:
   ```typescript
   import { loadStripe } from '@stripe/stripe-js'

   const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!)
   ```

## Contributing

We welcome contributions to LaunchPad. Please read the [Contributing Guide](CONTRIBUTING.md) for details.

## License

LaunchPad is open-source software licensed under the MIT license.

---

Built with ❤️ by [Ankur Tyagi]