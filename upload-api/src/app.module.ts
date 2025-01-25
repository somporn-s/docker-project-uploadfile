import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { PersonalModule } from './personal/personal.module'
import { ShareServiceModule } from './services/shareService.module'

@Module({
    imports: [PersonalModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
