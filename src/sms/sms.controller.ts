import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { SmsService } from './sms.service';
import { CreateSmsDto } from './dto/create-sms.dto';

@Controller()
export class SmsController {
  constructor(private readonly smsService: SmsService) { }

  @EventPattern('send_sms')
  create(@Payload() createSmsDto: CreateSmsDto) {
    return this.smsService.create(createSmsDto);
  }
}
