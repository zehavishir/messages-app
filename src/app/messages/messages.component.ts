import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { Users } from '../users';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  chats: string[];
  isClicked: boolean;
  currUser: string;
  signedUpUser: User;
  currUsersArray: User[];
  users: User[];

  constructor(private userService: UserService,
    private http: HttpClient) {
    this.chats = [];
    this.isClicked = false;
    this.currUser = '';
    this.users = Users;
    this.signedUpUser = this.userService.signUpUser;//the user that signed up
  }
  ngOnInit(): void {
    this.currUsersArray = this.users.filter(
      (user: User) => user.fullName != this.userService.username);
      console.log(this.currUsersArray);
  }

  UserSelected(index: number) {
    this.currUser = this.currUsersArray[index].fullName;
    console.log(this.currUser);
  }
}
