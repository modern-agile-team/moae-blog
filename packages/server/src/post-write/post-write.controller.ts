import { Body, Controller, Inject, Post, Req, Res } from '@nestjs/common';
import { WriteDto } from 'src/config/dto/post-write.dto';
import { PostWriteService } from './post-write.service';

@Controller('write')
export class PostWriteController {
  constructor(
    @Inject(PostWriteService)
    private readonly postWriteService: PostWriteService,
  ) {}

  @Post('/')
  async createPost(@Body() body: WriteDto): Promise<any> {
    const result = await this.postWriteService.createPost(body);
    return result;
  }
}
