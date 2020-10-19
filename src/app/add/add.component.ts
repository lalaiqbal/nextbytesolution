import { Component, OnInit } from '@angular/core';
//import data from '../../assets//dumyserver/images'
import {HttpClient} from '@angular/common/http'
import {Router} from "@angular/router";
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  url='http://localhost:3000/dishes';
  description:any;
  data:any;
  selelected=null;
  base64Image: any;
  imageUrl:null;
  urlForImage=null;
  fileTOBIg=''
  
  constructor(private http:HttpClient,private router:Router) { 
    

  }
  keyPressIngBox(data){
    this.description=data;
    console.log(this.description)

  }

  ngOnInit(): void {
  
  }
  fileFethcin(){
    
  }
  async onPress() {
    this.fileTOBIg='';


   
   var postData={
      description:this.description,
      image:this. urlForImage
    }
    this.description='';
   
    
    this.http.post(this.url,postData).subscribe(
      res=>{
        this.router.navigate(['admin',{type:'Admin'}])
 

    }
       
      
      
    );
    this.fileTOBIg='Size to big'

   
    
    
    
  }
  onFileSelected(event){
    this.selelected=event.target.files[0];
    console.log(this.selelected);
    var read=new FileReader();
    read.readAsDataURL(this.selelected);
    read.onload=(event)=>{
      this.urlForImage=event.target.result;
      console.log(this.urlForImage)
        
    }
    

    


  }
  


}
