import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { AppService } from './app.service';
// import { AppController } from './app.controller';


@Module({
  imports: [ConfigModule.forRoot({ envFilePath: (process.env.NODE_ENV === 'production') ? '.production.env' : (process.env.NODE_ENV === 'stage') ? '.stage.env' : '.development.env' })],
  controllers: [],
  providers: [],
})
export class AppModule {
}
