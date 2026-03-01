# Microservice Notification

A specialized NestJS Microservice for handling notifications (Email and SMS) via TCP.

## Description

This service is key component of the system architecture, responsible for :
-   Sending Emails via **Resend**
-   Handling SMS notifications (Placeholder)

It operates as a **TCP Microservice** listening on port **3001** (default).

## Installation

```bash
$ npm install
```

## Running the Service

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Configuration

The service accepts the following environment variables (in `.env`):

| Variable         | Description                          | Default |
| ---------------- | ------------------------------------ | ------- |
| `PORT`           | Port for TCP listener                | `3001`  |
| `RESEND_API_KEY` | API Key for Resend email service     | (Req)   |

## Message Patterns

The service listens for the following **Event Patterns** (Fire-and-Forget):

### 1. `send_mail`

Sends an email.

**Payload:**
```typescript
{
  email: string;      // Recipient email
  subject?: string;   // Optional subject
  html?: string;      // Optional HTML content
}
```

### 2. `send_sms`

(Placeholder implementation)

**Payload:**
```typescript
{
  phoneNumber: string;
  message: string;
}
```

## Client usage Example

To communicate with this microservice from another NestJS application:

```typescript
import { ClientProxyFactory, Transport } from '@nestjs/microservices';

const client = ClientProxyFactory.create({
  transport: Transport.TCP,
  options: {
    port: 3001,
  },
});

// Send an email
client.emit('send_mail', {
  email: 'user@example.com',
  subject: 'Welcome!',
  html: '<h1>Hello World</h1>'
});
```
