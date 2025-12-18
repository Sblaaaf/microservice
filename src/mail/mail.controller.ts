// test.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('test')
export class TestController {
  constructor(private readonly mailService: MailService) {}

  @Get('mail')
  async sendMail(@Query('email') email: string) {
    return await this.mailService.sendTestEmail(email);
  }
}
