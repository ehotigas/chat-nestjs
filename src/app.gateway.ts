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
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private logger: Logger = new Logger('AppGateway');

  @SubscribeMessage('msgToServer')
  handleMessage(client: Socket, payload: string): void {
    this.logger.log(`${client.id} message: ${payload}`);
    this.server.emit('msgToClient', payload, client.id);
  }

  afterInit(): void {
    this.logger.log("Init");
  }

  handleConnection(client: Socket): void {
    this.logger.log(`Client Connected: ${client.id}`);
  }

  handleDisconnect(client: Socket): void {
    this.logger.log(`Client Disconnected: ${client.id}`);
  }
}
