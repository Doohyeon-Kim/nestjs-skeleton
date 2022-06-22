import {Module} from '@nestjs/common';
import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';
import {UserModule} from "../user/user.module";
import {UserService} from "../user/user.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "../user/user.entity";

@Module({
    imports: [TypeOrmModule.forFeature([User]), UserModule,],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {
}
