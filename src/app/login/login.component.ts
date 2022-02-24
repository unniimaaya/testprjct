import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



 username=""

 pwd=""


 
 loginForm=this.fb.group({
  username:['', [Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
    pwd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
 })

  constructor( private ds:DataService, private router:Router,private fb:FormBuilder) { 


    
  }

  ngOnInit(): void {
  }

  

login(){
  
  if(this.loginForm.valid){
    var username=this. loginForm.value.username
    var password=this.loginForm.value.pwd
    let database=this.ds.users

    if(username in database){

      if(password==database[username]["password"]){
        alert("login successfull")

        this.router.navigateByUrl('dashboard')

        
       
      }
      else{
        alert("incorrect password")
      }
    }
    else{
      alert("invalid acccount no")
    }


    }
    else{
      alert("invalid form")
    }

  }

}
