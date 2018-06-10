import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import {Router} from "@angular/router";
import { UserService } from '../user.service';

@Component({
  selector: 'app-paymentcomponent',
  templateUrl: './paymentcomponent.component.html',
  styleUrls: ['./paymentcomponent.component.css']
})
export class PaymentcomponentComponent implements OnInit {

  constructor(private _flashMessagesService: FlashMessagesService, private router: Router, private user:UserService) { }
  price;
  ngOnInit() {
    this.price = this.user.getPrice();
  }
  paybycard() {
    this.router.navigateByUrl("/card");
  }
  paybycash() {
    this._flashMessagesService.show('Successful!', { cssClass: 'alert-success' }),
    this.router.navigateByUrl("/shopping");
  }

}
