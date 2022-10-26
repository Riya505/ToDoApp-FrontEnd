import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private myapi:ApiService) {
   this.fetchData()
   }
  name=localStorage.getItem("name")
  todo=""

  readvalue=()=>{
    let data={
      "user_id":localStorage.getItem("id"),
      "todo":this.todo
    }
    console.log(data)
    this.myapi.addTodo(data).subscribe(
      (response)=>{
        alert("Added Todo")
      }
    )
    this.fetchData()
    this.todo=""

  }
  fetchData=()=>{
    let data={
      "user_id":localStorage.getItem("id")
    }
    console.log(data)
    this.myapi.viewToDo(data).subscribe(
      (resp)=>{
        this.todoData=resp
      }
    )
  }


  todoData:any=[]
  ngOnInit(): void {
  }

}
