import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { HelloWorldBean } from './data/welcome-data.service';
import { map } from 'rxjs';
import { AuthenticationBean } from '../AuthenticationBean';



@Injectable({
  providedIn: 'root'
})

export class BasicAuthenticationService {

  constructor(private http : HttpClient) { }

  // authenticate(username : string, password : string) {
  //   if(username==='admin' && password==='admin')
  //   {
  //     sessionStorage.setItem('authenticatedUser',username)
  //     return true
  //   }
  //   else {
  //       return false
  //   }
  // }

// createBasicAuthenticationHttpHeader(uname : string, pass: string)
// {
//   let username = uname
//   let password = pass
//   let basicAuthHeaderString = 'Basic '+window.btoa(username +':' + password)
//   return basicAuthHeaderString
// }

executeAuthenticationService(username : string,password : string ) {
 // alert('Inside executeAuthenticationService() Username = '+username+'\n Password = '+password)
  let basicAuthHeaderString = 'Basic '+window.btoa(username +':' + password)
  let headers = new HttpHeaders({
        Authorization : basicAuthHeaderString
  })
  alert("Token is = "+basicAuthHeaderString)
  return this.http.get<AuthenticationBean>('http://localhost:5454/basicauth/',{ headers : headers})
                                                                                .pipe(map(data=>{
                                                                                  sessionStorage.setItem('authenticatedUser',username)
                                                                                  sessionStorage.setItem('token',basicAuthHeaderString)
                                                                                  alert("After hitting the backend \n Token = "+sessionStorage.getItem('token')+"\n User ="+sessionStorage.getItem('authenticatedUser'))
                                                                                  
                                                                                  return data
                                                                            }));
console.log('Hello World Bean Service');
}

getAuthenticatedUser()
{
  return sessionStorage.getItem('authenticatedUser');
}

getAuthenticatedToken()
{
  let arra:string[] =['0'];
  if(this.getAuthenticatedUser())
  {
    return sessionStorage.getItem('token');
  }
  else
   return arra;
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
