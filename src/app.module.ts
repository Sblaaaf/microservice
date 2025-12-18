import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailModule } from './mail/mail.module';
import { SmsModule } from './sms/sms.module';

import { ConfigModule } from '@nestjs/config';
import { validationSchema } from './env.validation';

import { EventEmitterModule } from '@nestjs/event-emitter';

import { MockEventModule } from './mock-event/mock-event.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema,
    }),
    EventEmitterModule.forRoot(),
    MailModule,
    SmsModule,
    MockEventModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
