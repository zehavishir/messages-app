import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';

import { appRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { MessagesComponent } from './messages/messages.component';
import { FirstPersonComponent } from './messages/first-person/first-person.component';
import { SecondPersonComponent } from './messages/second-person/second-person.component';
import { MessagesService } from './messages.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignUpComponent,
    LogInComponent,
    MessagesComponent,
    FirstPersonComponent,
    SecondPersonComponent,
    ],
  imports: [
    BrowserModule,
    appRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService, MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
