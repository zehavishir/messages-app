import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  chats: string[];
  isClicked: boolean;
  arraySignUpUsers: User[];
  isLoading: boolean;
  currUser: string;
  loggedUser: number;

  constructor(private userService: UserService,
    private http: HttpClient) {
      this.chats = [];
      this.isClicked = false;
      this.isLoading = false;
      this.currUser = '';
      this.loggedUser = this.userService.userIndex;
      this.userService.GetUsersList().subscribe((users: User[]) => {
        this.arraySignUpUsers = users;
        console.log("arraySignUpUsers");
        console.log(this.arraySignUpUsers);
      });
  }

  ngOnInit(): void {
    this.userService.UpdateUserList();
    console.log("this is the sign up user!")
    console.log(this.userService.signUpUser);
    console.log("this is the index of the user");
    console.log(this.loggedUser);
  }

  UserSelected(index: number) {
    this.currUser = this.arraySignUpUsers[index].fullName;
  }

  isServerLoading(){
    this.isLoading = this.userService.isLoading;
    return this.isLoading;
  }
}
