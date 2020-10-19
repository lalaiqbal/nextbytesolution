import { Component, OnInit ,Input} from '@angular/core';
import {ActivatedRoute,Router} from "@angular/router";
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  flag=false;
  @Input() message:String;
  @Input() image:String;
  @Input() discription:String;
  @Input() id:Number;
  
  constructor(private router:Router,) {

    
   }

  ngOnInit(): void {
    if(this.message=='Admin'){
      this.flag=true;
    }
   
  }
  onEdit(){
    this.router.navigate(['edit',{id:this.id}])

  }

}
