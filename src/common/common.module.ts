import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigService,
  ],
  // providers: [CommonService],
  // exports: [CommonService],
})
export class CommonModule {
}
