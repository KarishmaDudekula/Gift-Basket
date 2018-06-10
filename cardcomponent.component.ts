import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { FlashMessagesService } from 'angular2-flash-messages';
import { UserService } from '../user.service';

@Component({
  selector: 'app-cardcomponent',
  templateUrl: './cardcomponent.component.html',
  styleUrls: ['./cardcomponent.component.css']
})
export class CardcomponentComponent implements OnInit {

  constructor(private _flashMessagesService: FlashMessagesService, private router: Router, private user:UserService) { }
  price;
  ngOnInit() {
     this.price = this.user.getPrice();
  }
 
   submit() {
     this._flashMessagesService.show('Payment Successful!', { cssClass: 'alert-success' }),
     this.router.navigateByUrl("/shopping");
   }
}
