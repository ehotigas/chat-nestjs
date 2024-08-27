import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer
} from '@nestjs/websockets';

@WebSocketGateway()
export class MessageGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    private server: Server;
    private logger: Logger = new Logger('MessageGateway');

    @SubscribeMessage('msgToServer')
    public handleMessage(client: Socket, payload: string): void {
        this.logger.log(`${client.id} message: ${payload}`);
        this.server.emit('msgToClient', payload, client.id);
    }

    public afterInit(): void {
        this.logger.log("Init");
    }

    public handleConnection(client: Socket): void {
        this.logger.log(`Client Connected: ${client.id}`);
    }

    public handleDisconnect(client: Socket): void {
        this.logger.log(`Client Disconnected: ${client.id}`);
    }
}
