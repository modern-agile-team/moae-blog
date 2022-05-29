import { Inject, Injectable } from '@nestjs/common';
import { postWriteReqConfig } from 'src/config/interface/post-write.interface';
import { PostWriteRepository } from './post-write.respository';

@Injectable()
export class PostWriteService {
  constructor(
    @Inject(PostWriteRepository)
    private readonly postWriteRepository: PostWriteRepository,
  ) {}

  async createPost(body: postWriteReqConfig) {
    return await this.postWriteRepository.createWrite(body);
  }
}
