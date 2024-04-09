/* eslint-disable prettier/prettier */
import { IsEnum, MinLength } from 'class-validator';

/* eslint-disable prettier/prettier */
export class CreateNinjaDto {
  @MinLength(3)
  name: string;


  @IsEnum(['stars', 'waters'], { message: 'Use Correct Weapon' })
  weapon: "stars" | "waters";
}