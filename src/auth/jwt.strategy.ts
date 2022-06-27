import {PassportStrategy} from "@nestjs/passport";
import {Strategy, ExtractJwt} from "passport-jwt";
import {AppDataSource} from "../index";
import * as config from "config";
import {UnauthorizedException} from "@nestjs/common";
import { User } from '../users/entities/user.entity';

export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private userRepository = AppDataSource.getRepository(User)
    ) {
        super({
            secretOrKey: process.env.JWT_SECRET || config.get("jwt.secret"),
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        });
    }

    async validate(payload) {
        const user: User = await this.userRepository.findOne({where: {email: payload["email"]}});
        if (user === null) {
            throw new UnauthorizedException();
        } else {
            return user;
        }
    }
}
