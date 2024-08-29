import NextAuth, { AuthOptions } from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import GitHubProvider from 'next-auth/providers/github'
import EmailProvider from 'next-auth/providers/email'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { render } from '@react-email/render'
import prisma from '@/lib/prisma'
import resend from '@/lib/resend'
import WelcomeEmail from '@/emails/WelcomeEmail'
import { ClerkProvider } from '@clerk/nextjs'
import { SupabaseAdapter } from '@next-auth/supabase-adapter'

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma) as any,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      sendVerificationRequest: async ({ identifier, url }) => {
        const user = await prisma.user.findUnique({
          where: { email: identifier },
          select: { name: true },
        })
        const emailHtml = render(
          WelcomeEmail({ username: user?.name || 'there' })
        )
        await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: identifier,
          subject: 'Welcome to Our App',
          html: emailHtml,
        })
      },
    }),
    ClerkProvider({
      apiKey: process.env.CLERK_API_KEY,
    }),
    SupabaseAdapter({
      url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
      secret: process.env.SUPABASE_SERVICE_ROLE_KEY!,
    }),
  ],
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    newUser: '/auth/new-user',
  },
}

const handler = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      sendVerificationRequest({
        identifier: email,
        url,
        provider: { server, from },
      }) {},
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider === 'email') {
        const emailVerified = await prisma.user.findUnique({
          where: { email: user.email },
          select: { emailVerified: true },
        })
        if (!emailVerified) {
          return false
        }
      }
      return true
    },
  },
})
export { handler as GET, handler as POST }
