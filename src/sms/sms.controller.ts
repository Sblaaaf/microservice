import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { SmsService } from './sms.service';
import { CreateSmDto } from './dto/create-sm.dto';

@Controller()
export class SmsController {
  constructor(private readonly smsService: SmsService) { }

  @EventPattern('send_sms')
  create(createSmDto: CreateSmDto) {
    return this.smsService.create(createSmDto);
  }
}
