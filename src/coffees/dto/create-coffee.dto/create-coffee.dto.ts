import { IsString } from 'class-validator';
import { IsNumber } from 'class-validator';

export class CreateCoffeeDto {
  @IsString()
  readonly name: string;

  @IsString({ each: true })
  readonly best_flaver: string[];

  @IsNumber()
  readonly age: number;

  @IsString()
  readonly address: string;

  @IsNumber()
  readonly phone: number;

  @IsString()
  readonly email: string;
}
