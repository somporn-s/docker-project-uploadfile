import { MinioService } from '../services/minio/minio.service'
import { PersonalService } from './personal.service'
import { Controller, Get } from '@nestjs/common'

@Controller('personal')
export class PersonalController {
    constructor(
        private personalService: PersonalService,
        private minioService: MinioService,
    ) {}
    @Get('user')
    personalUser() {
        this.minioService.test();
        return this.personalService.personalUser(1)
    }
}
