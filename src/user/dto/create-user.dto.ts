import {IsString, Matches, MaxLength, MinLength} from "class-validator";

export class CreateUserDto {

    @IsString()
    @Matches(/^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/)
    email: string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    username: string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    @Matches(/^[a-zA-Z0-9]*$/, {
        message: "Password only accepts English and number",
    })
    password: string;
}
