import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../Services/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  message = "Welcome Message"
  name=''
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
 handleSuccessfulResponse(response: any) {
  console.log(response)
}

}