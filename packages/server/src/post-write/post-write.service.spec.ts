import { Test, TestingModule } from '@nestjs/testing';
import { PostWriteService } from './post-write.service';

describe('PostWriteService', () => {
  let service: PostWriteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostWriteService],
    }).compile();

    service = module.get<PostWriteService>(PostWriteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
