import { Module } from '@nestjs/common'
import { PersonalController } from './personal.controller'
import { PersonalService } from './personal.service'
import { ShareServiceModule } from '../services/shareService.module'

@Module({
    imports: [ShareServiceModule],
    controllers: [PersonalController],
    providers: [PersonalService],
})
export class PersonalModule {}
