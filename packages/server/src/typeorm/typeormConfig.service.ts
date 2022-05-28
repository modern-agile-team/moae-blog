import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export class TypeOrmConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config Error - missing env.${key}`);
    }

    return value;
  }

  getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: this.getValue('RDS_HOST_NAME'),
      port: +this.getValue('RDS_PORT') || 3306,
      username: this.getValue('RDS_USERNAME'),
      password: this.getValue('RDS_PASSWORD'),
      database: this.getValue('RDS_DB_NAME'),
      entities: ['dist/**/*.entity{.ts,.js}'],
    };
  }
}
