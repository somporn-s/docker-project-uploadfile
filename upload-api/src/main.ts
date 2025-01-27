import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
        .setTitle('API Documentation Upload Document') // ชื่อเอกสาร
        .setDescription('API Manage Document File') // คำอธิบาย
        .setVersion(process.env.SWAGGWER_PATH ?? '0') // เวอร์ชันของเอกสาร
        .addBearerAuth() // เพิ่ม Authentication (ถ้าจำเป็น)
        .build()

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup(process.env.SWAGGWER_PATH ?? '', app, document)

    await app.listen(process.env.PORT ?? 5002)
}
bootstrap()
