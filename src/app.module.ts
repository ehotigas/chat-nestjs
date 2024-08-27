import { NotificacaoModule } from './NotificacaoModule/NotificacaoModule';
import { MessageModule } from './MessageModule/MessageModule';
import { Module } from '@nestjs/common';


@Module({
  imports: [
    MessageModule,
    NotificacaoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
