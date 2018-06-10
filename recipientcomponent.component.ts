import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { UserService } from '../user.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recipientcomponent',
  templateUrl: './recipientcomponent.component.html',
  styleUrls: ['./recipientcomponent.component.css']
})
export class RecipientcomponentComponent implements OnInit {

  constructor(private http: HttpClient, private _flashMessagesService: FlashMessagesService, private router: Router, private user:UserService) { }
  useremail = this.user.getEmail();
  ngOnInit() {
  }
  paynow() {
    this.router.navigateByUrl("/payment");
  }
  submit(recipient) {
      this.http.post("sample/rest/recipientresource/recipientform", {
        email: this.useremail,
        name: recipient.name,
        contact: recipient.contact,
        pincode: recipient.pincode,
        house: recipient.house,
        area: recipient.area,
        land: recipient.land,
        town: recipient.town,
        state: recipient.state
      }, {responseType: 'text'})
        .subscribe(
        (res: any) => {
           this._flashMessagesService.show('Success!', { cssClass: 'alert-success' }),
           this.router.navigateByUrl("/payment")
        });
        err => {
          console.log(err);
        }
      
    }
}

