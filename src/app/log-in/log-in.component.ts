import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { UserService } from '../user.service';
import { Users } from '../users';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  form: NgForm;
  isClicked :boolean;
  isUserFound:boolean;
  usersArray: User[];
  constructor(
    private userService: UserService,
    private router: Router) { 
      this.isClicked = false;
      this.usersArray = Users;
      this.isUserFound = false;
    }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    const value = form.value;
    const newUser = {fullName: value.name, password: value.password};
    if (this.userService.findUser(newUser, this.usersArray)) {
      this.isUserFound = true;
      this.userService.username = value.name;
    }
    else {
      this.isUserFound = false;
    }
    return this.isUserFound;
  }

  clickAndNavigate() {
    if (this.isUserFound) {
      this.router.navigate(['/messages']);
    }  }
}
