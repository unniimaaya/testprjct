import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



 username=""
 uname=""
 pwd=""

 registerForm= this.fb.group({
  uname:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
  username:['' ,[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]],
  pwd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
})



  constructor(private ds: DataService,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
  }

 
  register(){
    
      if(this.registerForm.valid){
        var uname= this.registerForm.value.uname
        var username= this.registerForm.value.username
        var pwd= this.registerForm.value.pwd
    
     
        let db=this.ds.users
        if (username in db){
          alert("account already exist")
        }  
        else{
          db[username]={
            username,
            pwd,
            uname
          }
         alert("account registerd successfully")
          this.router.navigateByUrl("")
        }
       
      }
      else{
        alert("invalid form")
      }
    }

}
