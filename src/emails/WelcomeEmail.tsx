import {
  Html,
  Head,
  Body,
  Container,
  Text,
  Button,
} from '@react-email/components'
import * as React from 'react'

interface WelcomeEmailProps {
  username: string
}

export const WelcomeEmail: React.FC<WelcomeEmailProps> = ({ username }) => (
  <Html>
    <Head />
    <Body style={{ fontFamily: 'Arial, sans-serif' }}>
      <Container>
        <Text>Welcome, {username}!</Text>
        <Text>We're excited to have you on board.</Text>
        <Button
          href="https://your-app-url.com/get-started"
          style={{ background: '#000', color: '#fff', padding: '12px 20px' }}
        >
          Get Started
        </Button>
      </Container>
    </Body>
  </Html>
)

export default WelcomeEmail
