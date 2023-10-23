import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

 constructor(private http : HttpClient) { }

 executeHelloWorldBeanService() {
 return this.http.get<HelloWorldBean>('http://localhost:5454/hello-world-bean');
  
  console.log('Hello World Bean Service');

 }
}

export class HelloWorldBean{
  constructor (public message : string) { } 
}
