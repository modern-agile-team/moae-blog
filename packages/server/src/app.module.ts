import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostWriteModule } from './post-write/post-write.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PostWriteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
