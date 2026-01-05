import { Controller, UsePipes } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { SmsService } from './sms.service';
import { CreateSmDto } from './dto/create-sm.dto';
import { JoiValidationPipe } from '../common/pipes/joi-validation.pipe';
import { smsSchema } from './sms.schema';

@Controller()
export class SmsController {
  constructor(private readonly smsService: SmsService) { }

  @EventPattern('send_sms')
  @UsePipes(new JoiValidationPipe(smsSchema))
  create(createSmDto: CreateSmDto) {
    return this.smsService.create(createSmDto);
  }
}
