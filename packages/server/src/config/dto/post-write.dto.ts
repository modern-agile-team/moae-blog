import { IsString, IsDefined } from 'class-validator';

export class WriteDto {
  @IsString()
  @IsDefined()
  title: string;

  @IsString()
  @IsDefined()
  content: string;

  @IsString()
  @IsDefined()
  writer: string;
}
