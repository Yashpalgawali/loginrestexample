import { Component, OnInit } from '@angular/core';
import { HardodedAuthenticationService } from '../Services/hardoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private hardcodedauthserv : HardodedAuthenticationService) { }

  ngOnInit(): void {
    this.hardcodedauthserv.logout()
  }
}
