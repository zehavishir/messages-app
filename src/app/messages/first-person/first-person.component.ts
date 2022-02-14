import { Component, Input, OnInit } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { MessagesService } from 'src/app/messages.service';

@Component({
  selector: 'app-first-person',
  templateUrl: './first-person.component.html',
  styleUrls: ['./first-person.component.css']
})
export class FirstPersonComponent implements OnInit {
  socket: Socket;
  @Input('message') message: string;
  @Input() usernameTalking: string;
  messagesArray: string[];

  constructor(private messagesService: MessagesService) { 
    this.messagesArray = this.messagesService.messagesArray1;
    this.socket = io('http://localhost:3000');
  }

  ngOnInit() {
    this.socket.on('newMessage', (message: string) => {
      //display new message;
      this.messagesArray.push(message);
    })
  }

  onSubmit() {
    this.socket.emit('newMessage', this.message)
  }
}
