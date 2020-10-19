import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  admin='admin@admin.com';
  cus='customer@customer.com';
  constructor(private route:Router) { }

  ngOnInit(): void {
    //this.route.navigate(['add'])
   // this.route.navigate(['admin',{type:'Admin'}])
  }
  navigate(email,password){
    
    if(email==this.admin){
      if(password=='123456789'){
        this.route.navigate(['admin',{type:'Admin'}])
      }
      else{
        alert('Wrong username or password')
      }

    }
    else   
    {
      if(email==this.cus){
        if(password=='123456789'){
          this.route.navigate(['admin',{type:'Customer'}])
        
        }
        else{
          
        alert('Wrong username or password') 
        }
      }
      else{
        
        alert('Wrong username or password')
      }
    }
    
  }

}
