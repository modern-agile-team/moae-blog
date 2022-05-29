import { Injectable } from '@nestjs/common';
import { postWriteReqConfig } from 'src/config/interface/post-write.interface';
import { PostWriteEntity } from 'src/entities/post-write.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostWriteRepository extends Repository<PostWriteEntity> {
  createWrite(data: postWriteReqConfig) {
    return this.createQueryBuilder()
      .insert()
      .into(PostWriteEntity, ['title', 'content', 'writer_no'])
      .values(data)
      .execute();
  }
}
