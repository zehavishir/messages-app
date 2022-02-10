//this is a file module for the routes
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HeaderComponent } from "./header/header.component";
import { LogInComponent } from "./log-in/log-in.component";
import { MessagesComponent } from "./messages/messages.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

const appRoutes: Routes = [
    {path: 'signup', component:SignUpComponent},
    {path: 'logIn', component:LogInComponent},
    {path: 'messages', component:MessagesComponent}
  ]
  
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class appRoutingModule{
    
}