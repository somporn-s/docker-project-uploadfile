import { Module } from '@nestjs/common'
import { PersonalController } from './personal.controller'
import { PersonalService } from './personal.service'
import { ShareServiceModule } from '../services/shareService.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from 'src/models/user.entity'

@Module({
    imports: [ShareServiceModule, TypeOrmModule.forFeature([User])],
    controllers: [PersonalController],
    providers: [PersonalService],
})
export class PersonalModule {}
