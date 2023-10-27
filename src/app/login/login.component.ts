import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardodedAuthenticationService } from '../Services/hardoded-authentication.service';
import { BasicAuthenticationService } from '../Services/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username !: string
  password =''
  errorMessage = 'Invalid credentials';
  invalidLogin = false;
  constructor (private router : Router,private hardauth : HardodedAuthenticationService,private basicauthserv : BasicAuthenticationService) { } 

  handlelogin()
  {
    if(this.hardauth.authenticate(this.username,this.password))
    {
      this.router.navigate(['welcome', 'admin']);
      this.invalidLogin=false;
    } 
    else {
      this.invalidLogin = true;
    }
  }

  handleBasicAuthLogin()
  {
    this.basicauthserv.executeAuthenticationService(this.username,this.password).subscribe(
        data => {
          console.log(data)
          this.router.navigate(['welcome',this.username])
          this.invalidLogin=false
        },
        error=> {
          console.log(error)
          this.invalidLogin=true
        }
    )


    if(this.basicauthserv.executeAuthenticationService(this.username,this.password) )
    {
      this.router.navigate(['welcome', 'admin']);
      this.invalidLogin=false;
    } 
    else {
      this.invalidLogin = true;
    }
  }
}
