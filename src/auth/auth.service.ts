import { ConflictException, Injectable, InternalServerErrorException, Logger, Post } from '@nestjs/common';
import { AppDataSource } from '../index';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/sign-in.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  // constructor(@InjectRepository(User) private userRepository: Repository<User>){}

  constructor(
    // private userRepository = AppDataSource.getRepository(User),

    private userService: UsersService,
    private jwtService: JwtService) {
  }

  sendVerificationEmail(email: string, verificationToken: string) {
    // await this.emailService.sendVerificationEmail(, verificationToken: string);
  }

  // private async send

  async verifyEmail(signUpVerificationToken: string): Promise<string> {

    //TODO

    throw new Error('Method not implemented.');
  }


  async signUp(createUserDto: CreateUserDto): Promise<User> {

    const existingUser: User = await this.userService.findByEmail(createUserDto.email);


    if (existingUser) {
      Logger.log('The user exists already.'); ///
    } else {
      const hashedPassword: string = await bcrypt.hash(createUserDto.password, await bcrypt.genSalt());

      return await this.userService.create(
        createUserDto.email,
        createUserDto.nickname,
        hashedPassword,
      );
    }
  }


  // async signUp(createUserDto: CreateUserDto): Promise<User> {
  //
  //   const existingUser: User = await this.userRepository.findOne({where: {email: createUserDto.email}});
  //
  //   if (existingUser) {
  //     Logger.log("The user exists already."); ///
  //   } else {
  //     const hashedPassword: string = await bcrypt.hash(createUserDto.password, await bcrypt.genSalt());
  //     const user: User = await this.userRepository.create({
  //       nickname: createUserDto.nickname,
  //       password: hashedPassword
  //     });
  //     try {
  //       await this.userRepository.save(user);
  //       Logger.log("User Saved");
  //
  //       const payload: { email: string } = {
  //         email: createUserDto.email,
  //       };
  //
  //
  //       // let userDto: UserDto = new UserDto();
  //       // userDto.access_token = this.jwtService.sign(payload);
  //       // userDto.user_id = user.user_id;
  //       // userDto.email = user.email;
  //       // userDto.nickname = user.nickname;
  //
  //       return user;
  //     } catch (error) {
  //       if (error.code === "233505") {
  //         throw new ConflictException("Existing username");
  //       } else {
  //         throw new InternalServerErrorException();
  //       }
  //     }
  //   }
  // }

  async signIn(signInDto: SignInDto): Promise<string> {

    throw new Error('Method not implemented');
  }


}
