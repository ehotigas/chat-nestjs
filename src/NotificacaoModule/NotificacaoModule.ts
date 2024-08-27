import { NotificacaoGateway } from "./NotificacaoGateway";
import { Module } from "@nestjs/common";

@Module({
    providers: [NotificacaoGateway]
})
export class NotificacaoModule {

}