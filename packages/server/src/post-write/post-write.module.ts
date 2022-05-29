import { Module } from '@nestjs/common';
import { PostWriteService } from './post-write.service';
import { PostWriteController } from './post-write.controller';

@Module({
  providers: [PostWriteService],
  controllers: [PostWriteController]
})
export class PostWriteModule {}
