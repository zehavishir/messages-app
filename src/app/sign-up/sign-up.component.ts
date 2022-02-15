import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';
import { UserService } from '../user.service';
import { Users } from '../users';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form: NgForm;
  user: User;
  usersArray = Users;
  constructor(private userService: UserService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    const value = form.value;
    const newUser = {fullName: value.fullName, password: value.password}; 
    this.userService.addUser(newUser);
    this.userService.username = value.fullName;
    this.router.navigate(['/messages']); 
  }
}
