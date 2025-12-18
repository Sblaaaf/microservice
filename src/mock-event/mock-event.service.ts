import { Injectable, Logger } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';

@Injectable()
export class MockEventService {
    private readonly logger = new Logger(MockEventService.name);

    constructor(private eventEmitter: EventEmitter2) { }

    triggerEvent(type: string, payload: any) {
        this.logger.log(`Emitting event: ${type} with payload: ${JSON.stringify(payload)}`);
        this.eventEmitter.emit(type, payload);
        return { status: 'success', event: type, payload };
    }
}
