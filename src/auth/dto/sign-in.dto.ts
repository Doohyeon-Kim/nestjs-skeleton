import {IsString, Matches} from "class-validator";


export class SignInDto{
    @IsString()
    @Matches(/^([\w._\-])*[a-zA-Z\d]+([\w._\-])*([a-zA-Z0-9])+([\w._\-])+@([a-zA-Z\d]+\.)+[a-zA-Z\d]{2,8}$/)
    email: string;

    @IsString()
    @Matches(/^[A-Za-z\d!@#$%^&*()]{8,30}$/)
    password: string;
}
