import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

import { CardsComponent } from './cards/cards.component';
import { AddComponent } from './add/add.component';
import {HttpClientModule} from '@angular/common/http';
import { EditscreenComponent } from './editscreen/editscreen.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
 
    CardsComponent,
 
    AddComponent,
 
    EditscreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
