import { Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { AppDataSource } from '../index';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepository = AppDataSource.getRepository(User),
    // private jwtService: JwtService
  ) {
  }

  async create(email: string, nickname: string, password: string) {
    const user: User = await this.userRepository.create({ email, nickname, password });
    try {
      await this.userRepository.save(user);
      Logger.log(`User Saved: ${user}`);
      return user;
    } catch (error) {
      Logger.error(error);
      throw new InternalServerErrorException();
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async findByEmail?(email: string): Promise<User> {
    return await this.userRepository.findOne({ where: { email: email } });
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

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
