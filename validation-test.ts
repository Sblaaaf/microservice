import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

async function bootstrap() {
    const logger = new Logger('ValidationTest');
    const client = ClientProxyFactory.create({
        transport: Transport.TCP,
        options: {
            host: '127.0.0.1',
            port: 3000,
        },
    });

    // 1. Valid Mail
    logger.log('--- Test 1: Valid Mail ---');
    await client.emit('send_mail', { email: 'valid@test.com' }).toPromise();
    logger.log('Sent valid mail');

    // 2. Invalid Mail
    logger.log('--- Test 2: Invalid Mail ---');
    try {
        await client.emit('send_mail', { email: 'invalid-email' }).toPromise();
        logger.error('Should have failed!');
    } catch (e) {
        logger.log('Caught expected validation error: ' + JSON.stringify(e));
    }

    // 3. Valid SMS
    logger.log('--- Test 3: Valid SMS ---');
    await client.emit('send_sms', { phoneNumber: '+1234567890', message: 'Hello' }).toPromise();
    logger.log('Sent valid SMS');

    // 4. Invalid SMS
    logger.log('--- Test 4: Invalid SMS ---');
    try {
        await client.emit('send_sms', { phoneNumber: 'abc', message: '' }).toPromise();
        logger.error('Should have failed!');
    } catch (e) {
        logger.log('Caught expected validation error: ' + JSON.stringify(e));
    }

    setTimeout(() => {
        logger.log('Exiting...');
        process.exit(0);
    }, 1000);
}
bootstrap();
