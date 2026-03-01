import { Controller, Post, Body } from '@nestjs/common';
import { MockEventService } from './mock-event.service';

@Controller('mock-event')
export class MockEventController {
    constructor(private readonly mockEventService: MockEventService) { }

    @Post()
    trigger(@Body() body: { type: string; payload: any }) {
        // We emit 'app.event' because MailService is listening specifically to that channel.
        // We inject the 'type' into the payload so MailService can switch on it.
        const eventPayload = { ...body.payload, type: body.type };
        return this.mockEventService.triggerEvent('app.event', eventPayload);
    }
}
