import { Controller, UsePipes } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { MailService } from './mail.service';
import { JoiValidationPipe } from '../common/pipes/joi-validation.pipe';
import { mailSchema } from './mail.schema';

@Controller()
export class TestController {
  constructor(private readonly mailService: MailService) { }

  @EventPattern('send_mail')
  @UsePipes(new JoiValidationPipe(mailSchema))
  async sendMail(data: { email: string; subject?: string; html?: string }) {
    if (data.subject || data.html) {
      return await this.mailService.sendEmail(
        data.email,
        data.subject || 'No Subject',
        data.html || '<p>No Content</p>',
      );
    }
    return await this.mailService.sendTestEmail(data.email);
  }
}
