import { OnGatewayConnection, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";
import { Logger } from "@nestjs/common";

@WebSocketGateway()
export class NotificacaoGateway {
    @WebSocketServer()
    private server: Server;
    private readonly logger: Logger = new Logger('NotificacaoGateway');

    @SubscribeMessage('novaPublicacao')
    public handlePublicacao(client: Socket): void {
        this.logger.log("Nova Publicacao");
        this.server.emit("atualizarPublicacoes");
    }
}