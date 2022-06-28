import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import emailConfig from '../config/email.config';
import { typeORMConfig } from '../config/typeorm.config';
import { validationSchema } from '../config/validationSchema';
import { CoreModule } from '../core/core.module';

// import { AppService } from './app.service';
// import { AppController } from './app.controller';


@Module({
  // imports: [ConfigModule.forRoot({ envFilePath: (process.env.NODE_ENV === 'production') ? '.production.env' : (process.env.NODE_ENV === 'stage') ? '.stage.env' : '.development.env' })],
  imports: [
    CoreModule,
    ConfigModule.forRoot({
      envFilePath: `${__dirname}/config/env/${process.env.NODE_ENV}.env`,
      ignoreEnvFile: process.env.NODE_ENV === 'production',
      load: [emailConfig],
      isGlobal: true,
      validationSchema: validationSchema,
    }),
    TypeOrmModule.forRoot(typeORMConfig),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
