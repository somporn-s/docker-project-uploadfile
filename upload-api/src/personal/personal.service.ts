import { MinioService } from '../services/minio/minio.service'
import { Injectable } from '@nestjs/common'

@Injectable()
export class PersonalService {
    constructor(private minioService: MinioService) {}

    personalUser(id: number) {
        return 'user : ' + id
    }
}
