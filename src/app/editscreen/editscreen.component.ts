import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-editscreen',
  templateUrl: './editscreen.component.html',
  styleUrls: ['./editscreen.component.scss']
})
export class EditscreenComponent implements OnInit {
  url='http://localhost:3000/dishes';
  dbData:any;
  type='edit'
  flag=false;
  urlForImage;
  selelected;
  fileTOBIg=''
  id;
  constructor(private route: ActivatedRoute,private http:HttpClient,private routes:Router ) {
    this.route.params.subscribe(params => {

      this.id=params.id;
      this.flag=true;
      this.http.get(this.url+'/'+String(this.id)).subscribe(
        res=>{
          this.dbData=res;
       
          this.urlForImage=this.dbData.image;
        }
      )
    
  });


    
   }

  ngOnInit(): void {
    this.urlForImage=this.dbData.image;

  }
  savingButton(dis){
    this.fileTOBIg='';
    var parms={
      description:dis,
      image:this.urlForImage
    };
    this.http.put(this.url+'/'+String(this.dbData.id),parms).subscribe(res=>{
     
      this.routes.navigate(['admin',{type:'Admin'}]);
    })
    this.fileTOBIg='File to big'


  }
  delItem(){
    this.http.delete(this.url+'/'+String(this.dbData.id)).subscribe(res=>{
      this.routes.navigate(['admin',{type:'Admin'}]);
    })

  }
    onFileSelected(event){
    this.selelected=event.target.files[0];
    var read=new FileReader();
    read.readAsDataURL(this.selelected);
    read.onload=(event)=>{
      this.urlForImage=event.target.result;
  
        
    }
    


  }

}
