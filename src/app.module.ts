import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import emailConfig from './config/email.config';
import { typeOrmConfig } from './config/typeorm.config';

// import { AppService } from './app.service';
// import { AppController } from './app.controller';


@Module({
  // imports: [ConfigModule.forRoot({ envFilePath: (process.env.NODE_ENV === 'production') ? '.production.env' : (process.env.NODE_ENV === 'stage') ? '.stage.env' : '.development.env' })],
  imports: [
    // CoreModule,

    // ConfigModule.forRoot({
    //   envFilePath: ['.development.development', '.stage.env', '.production.env'],
    // }),
    // ConfigModule.forRoot({
    //   envFilePath: (process.env.NODE_ENV === 'production') ? '.production.env'
    //     : (process.env.NODE_ENV === 'stage') ? '.stage.env' : '.development.env'
    // }),
    ConfigModule.forRoot({
      envFilePath: (process.env.NODE_ENV === 'development') ? '.development.env' : '.stage.env',
      ignoreEnvFile: process.env.NODE_ENV === 'production',
      load: [emailConfig],
      isGlobal: true,
      // validationSchema: validationSchema,
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
