import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../Services/data/todo-data.service';
import { Router } from '@angular/router';

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

//   todos = [ 
//     new Todo(1,'Learn Micro services',false, new Date()),
//     new Todo(2,'Expertise Micro services',false, new Date()),
//     new Todo(3,'Become Master ',false, new Date())
//     // { id : 1, description : 'Learn Micro services' },
//     // { id : 2, description : 'Expertise Micro services' }

// ]
todos !: Todo[]
message : any
  constructor(private todoserv : TodoDataService,private router : Router) { }

  ngOnInit(): void {
    this.refreshTodos() 
  }

  refreshTodos() {
    this.todoserv.retrieveAllTodos('admin').subscribe(response =>{
      console.log(response)
      this.todos = response
   })
  }
  
  deleteTodo(id :number)
  {
    alert("todo = "+id)
    this.todoserv.deleteTodo('admin',id).subscribe(
      response => {
        console.log('Deleted successfully')
        this.message= 'Deleted Successfully'
        this.refreshTodos() 
      } 
    ) 
  }

  updateTodo(id : number)
  {
    this.router.navigate(['todos',id])
  }

}
