import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardodedAuthenticationService {

  constructor() { }

  authenticate(username : string, password : string) {
   
    if(username==='admin' && password==='admin')
    {
      sessionStorage.setItem('authenticatedUser',username)
      return true
    }
    else {
        return false
    } 
  }
  isUserLoggedIn()
  {
    let user = sessionStorage.getItem('authenticatedUser')
    
    return !(user===null)
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser')
    sessionStorage.removeItem('token')
  }
}
