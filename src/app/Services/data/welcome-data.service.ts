import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

 constructor(private http : HttpClient) { }

 executeHelloWorldBeanService() {
  let basicAuthHeaderString  = this.createBasicAuthenticationHttpHeader()

  let headers = new HttpHeaders({
    Authorization : basicAuthHeaderString
  })
  return this.http.get<HelloWorldBean>('http://localhost:5454/hello-world-bean',{ headers : headers});
  console.log('Hello World Bean Service');
}

createBasicAuthenticationHttpHeader()
{
  let username = 'admin'
  let password = 'admin'

  let basicAuthHeaderString = 'Basic '+window.btoa(username +':' + password)

  return basicAuthHeaderString
}

executeHelloWorldBeanServiceWithPathVariable(name : any) {
  let basicAuthHeaderString  = this.createBasicAuthenticationHttpHeader()

  let headers = new HttpHeaders({
    Authorization : basicAuthHeaderString
  })
  return this.http.get<HelloWorldBean>('http://localhost:5454/hello-world-bean/'+`${name}`,{ headers : headers});

console.log('Hello World Bean Service');
}

}

export class HelloWorldBean{
  constructor (public message : string) { } 
}
