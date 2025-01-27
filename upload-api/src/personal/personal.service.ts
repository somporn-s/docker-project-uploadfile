import { InjectRepository } from '@nestjs/typeorm'
import { MinioService } from '../services/minio/minio.service'
import { Injectable } from '@nestjs/common'
import { User } from 'src/models/user.entity'
import { Repository } from 'typeorm'

@Injectable()
export class PersonalService {
    constructor(
        private minioService: MinioService,
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) {}

    async personalUser(id: number) {
        const a = await this.usersRepository.query('select * from personal')
        console.log('a : ', a)

        return 'user : ' + id
    }
}
