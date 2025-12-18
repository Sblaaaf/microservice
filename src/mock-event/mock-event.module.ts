import { Module } from '@nestjs/common';
import { MockEventService } from './mock-event.service';
import { MockEventController } from './mock-event.controller';

@Module({
    controllers: [MockEventController],
    providers: [MockEventService],
})
export class MockEventModule { }
