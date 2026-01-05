import { Injectable, Logger } from '@nestjs/common';
import { Resend } from 'resend';

import { ConfigService } from '@nestjs/config';

import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);
  private resend: Resend;

  constructor(private configService: ConfigService) {
    this.resend = new Resend(this.configService.get<string>('RESEND_API_KEY'));
  }

  @OnEvent('app.event')
  async handleAppEvent(payload: any) {
    this.logger.log(`[MailService] Received event: ${JSON.stringify(payload)}`);
    const email = payload.email || 'wessim.harmel@gmail.com'; // Default or from payload
    const type = payload.type || 'UNKNOWN';

    let subject = 'Notification';
    let html = '<p>Something happened.</p>';

    switch (type) {
      case 'ORDER_CREATED':
        subject = 'Order Created';
        html = `<h1>Order Created</h1><p>Order ID: ${payload.id}</p>`;
        break;
      case 'USER_REGISTERED':
        subject = 'Welcome!';
        html = `<h1>Welcome ${payload.name}</h1><p>Thanks for joining.</p>`;
        break;
      default:
        subject = `Event: ${type}`;
        html = `<p>Received event of type ${type}</p><pre>${JSON.stringify(payload, null, 2)}</pre>`;
    }

    await this.sendEmail(email, subject, html);
  }

  async sendEmail(to: string, subject: string, html: string) {
    try {
      const response = await this.resend.emails.send({
        from: 'Onboarding <onboarding@resend.dev>',
        to,
        subject,
        html,
      });
      this.logger.log(`Email sent successfully: ${JSON.stringify(response)}`);
      return response;
    } catch (error) {
      this.logger.error('Failed to send email:', error);
      throw error;
    }
  }

  async sendTestEmail(to: string) {
    return this.sendEmail(to, 'Test NestJS + Resend', `
        <h1>Hello 👋</h1>
        <p>Si tu lis ça, tout fonctionne.</p>
      `);
  }
}
