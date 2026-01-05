import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class CreateSmsDto {
    @IsString()
    @IsNotEmpty()
    @Matches(/^\+?[1-9]\d{1,14}$/, { message: 'phoneNumber must be a valid E.164 number' })
    phoneNumber: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(160)
    message: string;
}
