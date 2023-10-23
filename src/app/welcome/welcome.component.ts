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
    // console.log(this.message);
    console.log(this.route.snapshot.params['name'])
    this.name=this.route.snapshot.params['name']
    
  }
  
  getWelComeMessage()
  {
  //  console.log(this.welcomedataserv.executeHelloWorldBeanService())
  this.welcomedataserv.executeHelloWorldBeanService().subscribe(
    response => this.handleSuccessfulResponse(response)
  )
  console.log('Last Line of call')
}
  handleErrorResponse(err: any) {
    throw new Error('Method not implemented.');
  }
 handleSuccessfulResponse(response: HelloWorldBean) {
  this.welcomeMessageFromService = response.message
  // console.log(response.message)
}

}