import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


const PORT = process.env.PORT || 3001;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*'
  });
  await app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  });
}
bootstrap();
