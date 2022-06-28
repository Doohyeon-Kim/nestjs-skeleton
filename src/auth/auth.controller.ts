import { Body, Controller, Get, HttpCode, Logger, Post, Query, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { SignInDto } from './dto/sign-in.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { User } from '../users/entities/user.entity';

@Controller('auth')
@ApiTags('Auth API')
export class AuthController {

  constructor(private authService: AuthService) {
  }

  // @HttpCode(201)
  // @ApiBody({type: CreateUserDto})
  // @ApiCreatedResponse({ description: 'create user.', type: User })
  @Post('/sign-up')
  @ApiOperation({ summary: 'Sign Up API', description: 'Create User' })
  async signUp(@Req() request: Request, @Body() createUserDto: CreateUserDto): Promise<void> {
    Logger.log(createUserDto);
    await this.authService.signUp(createUserDto);
    return;
  }


  // @HttpCode(200)
  // @Post('/sign-in')
  // @ApiOperation({summary: 'Sign in API', description: 'Sign In'})
  // async signIn(@Body signInDto: SignInDto): Promise<string>{this.authService.signIn(signInDto);}


  //
  // @HttpCode(200)
  // @Post('/email-verify')
  // @ApiOperation({summary: 'Sign in API', description: 'Sign In'})
  // async verifyEmail(@Query() emailVerificationDto: EmailVerificationDto): Promise<string>{
  //     const{signUpVerificationToken} = emailVerificationDto;
  //     return await this.authService.verifyEmail(signUpVerificationToken);
  // }

  // @Post('/sign-in')
  // async signIn(@Body){
  // this.authService.signIn();
  // }


  // @Post('/sign-out')
  // async signOut(@Body){
  //     // this.authService.signOut();}


  // @Post('/refresh')
  // async refresh(@Body){
  //     // this.authService.refresh();}

}
