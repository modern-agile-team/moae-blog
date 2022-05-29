import { Test, TestingModule } from '@nestjs/testing';
import { PostWriteController } from './post-write.controller';

describe('PostWriteController', () => {
  let controller: PostWriteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostWriteController],
    }).compile();

    controller = module.get<PostWriteController>(PostWriteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
