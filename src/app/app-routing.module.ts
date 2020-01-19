import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialTableComponent } from './material-table/material-table.component';
 
 
const routes: Routes = [
  { 
    path:'',
    redirectTo:'material-table',
    pathMatch:'full'
  },
  {
    path:'material-table',
    component:MaterialTableComponent
  }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }