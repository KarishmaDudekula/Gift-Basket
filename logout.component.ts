import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router, private user:UserService) { }

  ngOnInit() {
    this.router.navigateByUrl("/home");
    this.user.setUserLoggedOut();
    this.user.email = null;
  }

}
