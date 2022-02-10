import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  form: NgForm;
  constructor(private userService: UserService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    const value = form.value;
    const newUser = {fullName: value.fullName, password: value.password}; 
    this.userService.addUser(newUser).subscribe((responseData)=>{
      console.log(responseData);
      this.router.navigate(['/messages']); 
    });    
  }
}
