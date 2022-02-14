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
    //every time the server updates, for example recieves a new message
    //do what's inside for example push it to the chat array
    //the "on" recieves data from the server
    this.socket.on('newMessage', (message: string) => {
      //display new message;
      this.messagesArray.push(message);
    })
  }

  onSubmit() {
    //the "emit" is for sending data back to the server
    this.socket.emit('sendMessage', this.message);
  }
}
