import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(public id : number, public description : string, public done : boolean,public targetDate : Date) {}
}


@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todo = {
      id : 1,
      description : 'Learn Micro services'
  }

  todos = [ 
    new Todo(1,'Learn Micro services',false, new Date()),
    new Todo(2,'Expertise Micro services',false, new Date()),
    new Todo(3,'Become Master ',false, new Date())
    // { id : 1, description : 'Learn Micro services' },
    // { id : 2, description : 'Expertise Micro services' }

]
  constructor() { }

  ngOnInit(): void {
    
  }
}
