import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RequestMethod, ValidationPipe } from '@nestjs/common';
import { TypeOrmConfigService } from './typeorm/typeormConfig.service';
import * as fs from 'fs';
import compression from 'compression';
import bodyParser from 'body-parser';

async function bootstrap() {
  await makeOrmConfig();

  const app = await NestFactory.create(AppModule, { cors: true });

  app.useGlobalPipes(
    new ValidationPipe({
      skipMissingProperties: true,
      transform: true,
    }),
  );

  app.use(compression);
  app.setGlobalPrefix('api', {
    exclude: [{ path: 'health', method: RequestMethod.GET }],
  });
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  await app.listen(process.env.PORT);
}

async function makeOrmConfig() {
  const typeOrmConfigService = new TypeOrmConfigService(process.env);
  const typeOrmConfig = typeOrmConfigService.getTypeOrmConfig();

  if (fs.existsSync('ormconfig.json')) {
    fs.unlinkSync('ormconfig.json');
  }

  fs.writeFileSync('ormconfig.json', JSON.stringify(typeOrmConfig, null, 2));
}
bootstrap();
