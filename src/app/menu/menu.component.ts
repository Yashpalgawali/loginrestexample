import { Component, OnInit } from '@angular/core';
import { HardodedAuthenticationService } from '../Services/hardoded-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  constructor(public hardcodedauthservice : HardodedAuthenticationService) { } 


  //isUserLoggedin : boolean = false
  ngOnInit(): void {
   // this.isUserLoggedin = this.hardcodedauthservice.isUserLoggedIn()
  }

}
