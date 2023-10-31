import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from './basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor(private basicauthserv : BasicAuthenticationService) { }

  intercept(request : HttpRequest<any>,next : HttpHandler) {
    // let username = 'admin'
    // let password = 'admin'
    // let basicAuthHeaderString = 'Basic '+window.btoa(username +':'+ password)
   
    // alert("inside http Interceptor\n Token from basic-auth-service = "+this.basicauthserv.getAuthenticatedToken())
    let basicAuthHeaderString = this.basicauthserv.getAuthenticatedToken();
   
    let username = this.basicauthserv.getAuthenticatedUser();

    request = request.clone({
      setHeaders : {
            Authorization : basicAuthHeaderString
      }
    })

  return next.handle(request)
  }
}
