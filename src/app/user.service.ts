import { User } from "./interfaces/user";
import { HttpClient } from "@angular/common/http";
import { Injectable, OnInit } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()
export class UserService {
    private UpdatedUsersList$: Subject<User[]>;
    isLoading: boolean;
    signUpUser: User;
    userIndex: number;
    constructor(private http: HttpClient) {
        this.UpdatedUsersList$ = new Subject<User[]>();
        this.isLoading = false;
    }
    //for the log in component
    findUser(logInUser: User, array: User[]) {
        for (let user of array) {
            if (user.fullName === logInUser.fullName && user.password === logInUser.password) {
                this.userIndex = array.indexOf(user);
                return true;
            }
        }
        return false;
    }
    //for the sign up component
    addUser(user: User): Observable<{ name: string }> {
        return this.http.post<{ name: string }>('https://my-messages-app-f3c4a-default-rtdb.firebaseio.com/users.json',
            user)
    }
    //using this method to get the users from the url
    private getUsers(): Observable<Object> {
        return this.http.get('https://my-messages-app-f3c4a-default-rtdb.firebaseio.com/users.json')
    }

    public UpdateUserList(): void {
        // this.isLoading = true;
        this.getUsers()
            .subscribe((responseData: Object) => {
                const arrayOfUsers: User[] = [];
                for (const key in responseData) {
                    if (responseData.hasOwnProperty(key)) {
                        arrayOfUsers.push({ ...responseData[key], id: key })
                    }
                }
                this.UpdatedUsersList$.next(arrayOfUsers);
            })
        // this.isLoading = false;
    }

    public GetUsersList(): Observable<User[]> {
        return this.UpdatedUsersList$.asObservable();
    }
}
