import { IsString, IsEmail, IsOptional, IsNotEmpty } from 'class-validator';

export class CreateMailDto {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsOptional()
    subject?: string;

    @IsString()
    @IsOptional()
    html?: string;
}
