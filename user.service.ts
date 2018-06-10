import { Injectable } from '@angular/core';


@Injectable()
export class UserService {

  private isUserLoggedIn;
  public email;
  public price;
  constructor() {
    this.isUserLoggedIn = false;
  }
  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }
  setUserLoggedOut() {
    this.isUserLoggedIn = false;
  }
  getUserLoggedIn() {
    return this.isUserLoggedIn;
  }
  setEmail(useremail) {
    this.email = useremail;
  }
  getEmail() {
    return this.email;
  }
  setPrice(price) {
    this.price = price;
  }
  getPrice() {
    return this.price;
  }
}
