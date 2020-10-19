import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title='thesuperfinal'
  constructor(private route:Router) { }
  ngOnInit(): void {
    this.route.navigate(['login'])
  }
}
