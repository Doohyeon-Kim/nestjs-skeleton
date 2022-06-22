import {Injectable, Logger} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {AppDataSource} from "../index";
import {User} from "../user/user.entity";
import {CreateUserDto} from "../user/dto/create-user.dto";
import {DataSource} from "typeorm";

@Injectable()
export class AuthService {
    // constructor(private userRepository = AppDataSource.getRepository(User)) {
    // }
    //
    // async signUp(createUserDto: CreateUserDto) {
    //     // const userRepository = AppDataSource.getRepository(User);
    //     await this.userRepository.find({where: {email: createUserDto.email}});
    //     await this.userRepository.save(createUserDto);
    //
    //     Logger.log("User Saved"); ///
    //
    // }
}
