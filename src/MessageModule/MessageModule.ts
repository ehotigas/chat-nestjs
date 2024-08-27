import { Module } from "@nestjs/common";
import { MessageGateway } from "./MessageGateway";

@Module({
    providers: [MessageGateway]
})
export class MessageModule {

}