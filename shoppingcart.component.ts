import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Router} from "@angular/router";
import { UserService } from '../user.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {
  useremail = this.user.getEmail();
  constructor(private http: HttpClient, private router: Router, private user:UserService) { }
  cart;
  ngOnInit() {
      //console.log(this.useremail);
      //this.http.get("sample/rest/shoppingcartresource/get/&email='"+this.useremail+"'").subscribe(res => this.cart = res);
      //this.http.get(`sample/rest/shoppingcartresource/?email=${this.useremail}`).subscribe((data:any[]) => this.cart = data);
      //this.http.get("sample/rest/shoppingcartresource/fetch/"+this.useremail).subscribe(res => this.cart = res);
      /*this.http.post("sample/rest/shoppingcartresource/showcart", {
      email: this.useremail
      }, {responseType: 'text'})
      .subscribe(
        (res:any) => {this.cart = res},
        err => {
          console.log(err);
        }
      );*/
    
    this.http.post("sample/rest/shoppingcartresource/showcart", {
      email: this.useremail
      })
      .subscribe(res => this.cart = res, err =>  console.log(err)
      )
    }
    back() {
      this.router.navigateByUrl("/shopping");
    }
    buynow(price) {
      this.user.setPrice(price);
      this.router.navigateByUrl("/recipient");
    }
  }