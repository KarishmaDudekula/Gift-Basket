import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'

@Component({
  selector: 'app-headercomponent',
  templateUrl: './headercomponent.component.html',
  styleUrls: ['./headercomponent.component.css']
})
export class HeadercomponentComponent implements OnInit {
  status;
  constructor() {
    //this.status = this.user.getUserLoggedIn();
   }
  ngOnInit() {
    //this.status = this.user.getUserLoggedIn();
    //console.log("Navigation="+this.status);
  }
  changeStatus() {
    this.status = true;
    console.log("Navigation="+this.status);
  }
  
  changeStatustoLogin() {
    this.status = false;
    console.log("Navigation="+this.status);
  }
}
