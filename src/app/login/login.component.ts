import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor (private router : Router) { } 

  handlelogin()
  {
    if(this.username==='in28minutes' && this.password==='dummy')
    {
      this.router.navigate(['welcome']);
      this.invalidLogin=false;
    }
    else {
      this.invalidLogin = true;
    }
  }
}
