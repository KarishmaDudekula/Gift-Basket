import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../user';
import {Router} from "@angular/router";
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  userList:User[]=[];
  register(form) {
    var user:User;
    user = form.value
    this.userList.push(user);
  }
  status;
  constructor(private http: HttpClient, private _flashMessagesService: FlashMessagesService, private router: Router) { }
  ngOnInit() {
  }
  
  submit(register) {
    if (register.password != register.repassword) {
      status = "Password mismatched";
    } else {
      this.http.post("sample/rest/myresource/registrationform", {
        name: register.name,
        email: register.email,
        contact: register.contact,
        address: register.address,
        password: register.password
      }, {responseType: 'text'})
        .subscribe(
        (res: any) => {
           this._flashMessagesService.show('Success!', { cssClass: 'alert-success' }),
           this.router.navigateByUrl("/login")
        });
        err => {
          console.log(err);
        }
      
    }
    //formdata = new FormData();
    //var data = "name" + register.name;
    //this.http.post("sample/rest/myresource/registrationform", register);
    //return this.http.post("http://localhost:8080/sample/rest/myresource/registrationform", register);
  }
}
