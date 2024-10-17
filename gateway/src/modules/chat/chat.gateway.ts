import { MessageBody, SubscribeMessage, WebSocketGateway,WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors:{
    origin: '*',
  }
})
export class ChatGateway {
  @WebSocketServer()
  server:Server

  @SubscribeMessage("typing")
  handleTyping(@MessageBody() data:any){
    this.server.emit("typing",`${data.user} is typing...`);
  }

  @SubscribeMessage("joined")
  handleJoin(@MessageBody() data:any){
    this.server.emit("joined",`${data.user} joined the chat`);
  }
}
