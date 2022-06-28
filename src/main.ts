import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger';

// import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.use(['/docs/swagger'],);

  // const swaggerConfig = new DocumentBuilder()
  //   .setTitle('Dooadex Skeleton API Docs')
  //   .setDescription('Dooadex Skeleton API description')
  //   .setVersion('1.0.0')
  //   .build();
  //


  // app.setGlobalPrefix('/api/development');

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Dooadex Skeleton API Docs')
    .setDescription('Dooadex Skeleton API description')
    .setVersion('1.0')
    .addTag('')
    // .addBearerAuth(
    //   { type: "http", scheme: "bearer", bearerFormat: "Token" },
    //   "access-token"
    // )
    // .addSecurity('Authorization', {
    //   type: 'http',
    //   scheme: 'bearer',
    // })
    .build();

  const swaggerOption: SwaggerDocumentOptions = {};


  const document = SwaggerModule.createDocument(app, swaggerConfig, swaggerOption);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();
