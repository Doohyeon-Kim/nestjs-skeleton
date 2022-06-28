import { forwardRef, Injectable, InternalServerErrorException, Logger } from '@nestjs/common';
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

      throw new InternalServerErrorException();
    }


  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async findByEmail(email: string) {
    return await this.userRepository.findOne({ where: { email: email } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
