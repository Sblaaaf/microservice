import { Module } from '@nestjs/common';
import { MailService } from './mail.service';

import { TestController } from './mail.controller';

@Module({
  controllers: [TestController],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule { }
