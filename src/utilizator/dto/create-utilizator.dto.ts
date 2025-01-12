import { IsString } from 'class-validator';

export class CreateUtilizatorDto {
  @IsString()
  nume: string;

  @IsString()
  email: string;

  @IsString()
  parola: string;

  @IsString()
  preferintaDieta: string;
}
