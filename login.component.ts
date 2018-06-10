import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UserService } from '../user.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  /*template: `
        <flash-messages></flash-messages>
        <router-outlet></router-outlet>
    `*/
})
export class LoginComponent implements OnInit {
  userList:User[] = [];
  login(form) {
    var user:User
    user = form.value
    this.userList.push(user);
  }
  constructor(private http: HttpClient, private router: Router, private _flashMessagesService: FlashMessagesService, private user:UserService) { }
  status:String;
  ngOnInit() {
  }
  submit(Login) {
    this.http.post("sample/rest/myresource/login", {
      
        email: Login.email,
        password: Login.password
      }, {responseType: 'text'})
        .subscribe(
        (res: any) =>{
          if (res != null) {
            console.log(this.user.getUserLoggedIn());
            this.user.setUserLoggedIn();
            this.user.setEmail(res);
            console.log(this.user.getUserLoggedIn());
            console.log("Success");
            this._flashMessagesService.show('Success!', { cssClass: 'alert-success' } );
            this.router.navigateByUrl("/shopping");
          } else {
            console.log("No Success");
            this._flashMessagesService.show('Failure!', { cssClass: 'alert-danger' } );
            this.router.navigateByUrl("/login");
          }
           //this.status = res
           console.log (res)}),
        err => {
          console.log(err);
        };
  }
}
