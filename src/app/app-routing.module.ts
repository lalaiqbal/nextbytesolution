import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AddComponent } from './add/add.component';
import { EditscreenComponent } from './editscreen/editscreen.component';
const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'add',component:AddComponent},
  {path:'edit',component:EditscreenComponent},
  
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
