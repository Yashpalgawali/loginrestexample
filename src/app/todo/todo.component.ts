import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from '../Services/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id !: number
  todo !: Todo 
  constructor(private router : Router,private todoserv : TodoDataService ,private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.todo = new Todo(this.id,'',false, new Date());
    if(this.id!=-1)
     { this.todoserv.retrieveTodo('admin', this.id).subscribe(data => this.todo=data) }
  }

  saveTodo()
  {
    if(this.id === -1) { 
      // Create ToDo
      this.todoserv.createTodo('admin', this.todo)
    }
    else {
            this.todoserv.updateTodo('admin', this.id, this.todo)
                                    .subscribe(data => 
                                              { 
                                                console.log(data) 
                                                this.router.navigate(['todos'])
                                              }
                                              ) 
    }
  }
}
 