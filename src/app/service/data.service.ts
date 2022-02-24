import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  
  users:any ={
    "ann2001":{username:"ann2001",uname:"ann",password:"2001"},
    "anu2002":{username:"anu2002",uname:"anu",password:"2002"},
    "ash2003":{username:"ash2003",uname:"ash",password:"2003"}
 }

  constructor() { }


  register(username:any,uname:any,pwd:any){
    let db=this.users
    if (username in db){
      alert("account already exist")
    }  
    else{
      db[username]={
        username,
        pwd,
        uname
      }
     alert("account register successfully")
    }
  }  



  login(username:any,password:any){
    let database =this.users
    if(username in database){
      if (password==database[username]["password"]){
       return 
      }
      else{
        alert("invalid  ")
      }
    }
  }
  
}
