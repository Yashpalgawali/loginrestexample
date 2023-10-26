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
    this.todo = new Todo(1,'',false, new Date());
     this.todoserv.retrieveTodo('admin', this.id).subscribe(data => this.todo=data)
  }

  saveTodo()
  {

  }
}
