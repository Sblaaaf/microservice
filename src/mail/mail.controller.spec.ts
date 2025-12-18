import { Test, TestingModule } from '@nestjs/testing';
import { TestController } from './mail.controller';
import { MailService } from './mail.service';
import { ConfigService } from '@nestjs/config';

describe('TestController', () => {
  let controller: TestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestController],
      providers: [
        MailService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockReturnValue('re_123'),
          },
        },
      ],
    }).compile();

    controller = module.get<TestController>(TestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
