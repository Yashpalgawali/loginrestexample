import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HelloWorldBean, WelcomeDataService } from '../Services/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = "Welcome Message"
  name=''
  welcomeMessageFromService !: string
  constructor(private route :ActivatedRoute,private welcomedataserv : WelcomeDataService) { }
  
  ngOnInit(): void {
    
    console.log(this.route.snapshot.params['name'])
    this.name=this.route.snapshot.params['name']
    
  }
  
  getWelComeMessage()
  {
    this.welcomedataserv.executeHelloWorldBeanService().subscribe(
    response => this.handleSuccessfulResponse(response),
    error => this.handleErrorResponse(error)
  )
  console.log('Last Line of call')
  }


  getWelComeMessageWithPathVariable()
  {
    this.welcomedataserv.executeHelloWorldBeanServiceWithPathVariable(this.name).subscribe(
    response => this.handleSuccessfulResponse(response),
    error    => this.handleErrorResponse(error)
  )
  console.log('Last Line of call')
  }


 handleSuccessfulResponse(response: HelloWorldBean) {
  this.welcomeMessageFromService = response.message
  // console.log(response.message)
}

handleErrorResponse(err: any) {
  console.log(err.error.message)
  this.welcomeMessageFromService =err.error.message
 
}

}