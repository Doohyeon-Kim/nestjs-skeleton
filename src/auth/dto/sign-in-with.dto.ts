import { ApiProperty } from "@nestjs/swagger";
import {IsString, Matches} from "class-validator";

export class SignInWithDto {
    @ApiProperty(
        {
            description: "멤버 이메일",
            default: "email address",
            type: String,
        }
    )
    @IsString()
    @Matches(/^([\w._\-])*[a-zA-Z\d]+([\w._\-])*([a-zA-Z0-9])+([\w._\-])+@([a-zA-Z\d]+\.)+[a-zA-Z\d]{2,8}$/)
    email: string;

    @ApiProperty(
        {
            description: "SNS 로그인 시 서비스 업체에서 제공해주는 고유 사용자 식별 ID",
            default: "user_id what provided from providers(e.g. apple, kakao)",
            type: String,
        }
    )
    @IsString()
    provider_user_id: string;
}
