import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
// import { pipe } from 'rxjs';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  chats: string[];
  isClicked: boolean;
  arrayUsers: User[];
  isLoading: boolean;
  currUser: string;

  constructor(private userService: UserService,
    private http: HttpClient) {
      this.chats = [];
      this.isClicked = false;
      this.isLoading = false;
      this.currUser = '';
      this.userService.GetUsersList().subscribe((users: User[]) => {
        this.arrayUsers = users;
      });
  }

  ngOnInit(): void {
    this.userService.UpdateUserList();
  }
  UserSelected(index: number) {
    this.currUser = this.arrayUsers[index].fullName;
  }

  isServerLoading(){
    this.isLoading = this.userService.isLoading;
    return this.isLoading;
  }

}
