import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  name=""
  phone=""
  place=""
  email=""
  password=""

  readvalue=()=>{
    let data={
      "name":this.name,
      "phone":this.phone,
      "place":this.place,
      "email":this.email,
      "password":this.password
    }
    console.log(data)
    this.myapi.signup(data).subscribe(
      (response)=>{
        console.log(response)
        alert("added")
      }
    )
  }


  ngOnInit(): void {
  }

}
