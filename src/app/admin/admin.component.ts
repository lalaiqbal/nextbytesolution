import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
//import data from '../../assets/dumyserver/images';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {
  type:any;
  flag=false;
  dbData:any;
  adminFlag=false;
    
  constructor(private route: ActivatedRoute,private router:Router,private http:HttpClient) {
    this.route.params.subscribe(params => {
      this.type = params["type"];

      if(this.type=='Admin'){
        this.adminFlag=true;
      }
      
  });


    
   }

  ngOnInit(): void {
    this.flag=false;
   
    this.http.get('http://localhost:3000/dishes').subscribe(
      res=>{
        this.dbData=res;
        
        
        this.flag=true;
      }
    )
  
  }
  logOut(){
    this.router.navigateByUrl('login')
  }
  nacigateToAdd(){
    this.router.navigateByUrl('add')

  }
}
