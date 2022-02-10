import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessagesService } from 'src/app/messages.service';

@Component({
  selector: 'app-second-person',
  templateUrl: './second-person.component.html',
  styleUrls: ['./second-person.component.css']
})
export class SecondPersonComponent implements OnInit {
  form: NgForm;
  array: string[];
  constructor(private messagesService: MessagesService) {
    this.array= this.messagesService.messagesArray2;
   }

  ngOnInit(): void {
  }
  
  onSubmit(form: NgForm) {
    this.messagesService.onSubmitSecond(form);
  }
}
