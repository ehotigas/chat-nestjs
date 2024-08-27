import { Logger } from '@nestjs/common';
import { Socket } from 'socket.io';
import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  WebSocketGateway
} from '@nestjs/websockets';

@WebSocketGateway()
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  private logger: Logger = new Logger('AppGateway');

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
