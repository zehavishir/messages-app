import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessagesService } from 'src/app/messages.service';

@Component({
  selector: 'app-first-person',
  templateUrl: './first-person.component.html',
  styleUrls: ['./first-person.component.css']
})
export class FirstPersonComponent implements OnInit {
  form: NgForm;
  @Input() usernameTalking: string;
  array: string[];
  constructor(private messagesSrevice: MessagesService) { 
    this.array = this.messagesSrevice.messagesArray1;
  }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.messagesSrevice.onSubmitFirst(form);
  }
}
