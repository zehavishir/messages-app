import { User } from "./interfaces/user";
import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Users } from "./users";

@Injectable()
export class UserService {
    isLoading: boolean;
    signUpUser: User;
    userIndex: number;
    username: string
    constructor(private http: HttpClient) {
        this.isLoading = false;
    }
    //for the log in component
    findUser(logInUser: User, array: User[]) {
        for (let user of array) {
            if (user.fullName === logInUser.fullName && user.password === logInUser.password) {
                // this.userIndex = array.indexOf(user);
                return true;
            }
        }
        return false;
    }
    //for the sign up component
    addUser(user: User) {
        Users.push(user);
    }
    //using this method to get the users from the url
    
}
