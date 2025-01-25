import { Module } from '@nestjs/common'
import { MinioService } from './minio/minio.service'

const services = [MinioService]
@Module({
    providers: [...services],
    exports: [...services],
})
export class ShareServiceModule {}
