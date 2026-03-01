import { Injectable, Logger } from '@nestjs/common';
import { CreateSmsDto } from './dto/create-sms.dto';
import { UpdateSmsDto } from './dto/update-sms.dto';

@Injectable()
export class SmsService {
  private readonly logger = new Logger(SmsService.name);

  create(createSmsDto: CreateSmsDto) {
    this.logger.log(`Sending SMS to ${createSmsDto.phoneNumber}`);
    return 'This action adds a new sm';
  }

  findAll() {
    return `This action returns all sms`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sm`;
  }

  update(id: number, updateSmsDto: UpdateSmsDto) {
    return `This action updates a #${id} sm`;
  }

  remove(id: number) {
    return `This action removes a #${id} sm`;
  }
}
