import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Global()
@Module({
  imports: [
    ConfigService,
  ],
  // providers: [CommonService],
  // exports: [CommonService],
})
export class CommonModule {
}
