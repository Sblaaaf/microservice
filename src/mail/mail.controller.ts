import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { MailService } from './mail.service';
import { CreateMailDto } from './dto/create-mail.dto';

@Controller()
export class MailController {
  constructor(private readonly mailService: MailService) { }

  @EventPattern('send_mail')
  async sendMail(@Payload() data: CreateMailDto) {
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

