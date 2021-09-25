import { NestFactory } from "@nestjs/core";
import { RootModule } from "src/modules/root/root.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const root = await NestFactory.create(RootModule);
  root.enableVersioning();
  root.setGlobalPrefix("/api")
  root.useGlobalPipes(new ValidationPipe({ transform: true }));

  const config = new DocumentBuilder()
    .setTitle('Exiles Statistics - API')
    .setDescription('The API Documentation for Exiles Statistics')
    .setVersion('v0')
    .setContact('Exiles Maintainers', 'https://github.com/exiles/backend', 'mailto:maintainers@exiles.cc')
    .build();
  const document = SwaggerModule.createDocument(root, config);
  SwaggerModule.setup('/api/_/docs', root, document);

  await root.listen(3010);
}
bootstrap();
