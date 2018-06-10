import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { UserService } from '../user.service';
@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  constructor(private http: HttpClient,  private router: Router, private user: UserService) { }
  data;
  ngOnInit() {
  }
  onClick(event) {
    console.log(event);
    this.router.navigateByUrl('/event');
    if (event == 'birthday') {
      this.http.get("sample/rest/giftsresource/getAllBirthdayGifts").subscribe(res => this.data = res);
    }
    if (event == 'Anniversary') {
      this.http.get("sample/rest/giftsresource/getAllAnniversaryGifts").subscribe(res => this.data = res);
    }
    if (event == 'appreciation') {
      this.http.get("sample/rest/giftsresource/getAllAppreciationGifts").subscribe(res => this.data = res);
    }
    if (event == 'HouseWarming') {
      this.http.get("sample/rest/giftsresource/getAllHouseWarmingGifts").subscribe(res => this.data = res);
    }
    if (event == 'Gifttofriends') {
      this.http.get("sample/rest/giftsresource/getAllFriendsGifts").subscribe(res => this.data = res);
    }
    if (event == 'Festivals') {
      this.http.get("sample/rest/giftsresource/getAllFestivalsGifts").subscribe(res => this.data = res);
    }
  }
  useremail = this.user.getEmail();
  addtoCart(cart) {
    this.http.post("sample/rest/shoppingcartresource/addtoCart", {
        email: this.useremail,
        productid: cart.id,
        productname: cart.description,
        price: cart.price
      }, {responseType: 'text'})
        .subscribe(
        (res: any) => {alert('Added to Cart')},
        err => {
          console.log(err);
        }
      );
  }
   
  showCart(email) {
    /*alert(email);
    this.http.post("sample/rest/shoppingcartresource/showcart", {
      email: this.useremail
    }, {responseType: 'text'})
    .subscribe(
      (res) => {alert(res)},
    err => {
      console.log(err);
   }
  );
}*/
    this.router.navigateByUrl("/shoppingcart");
    }
}
