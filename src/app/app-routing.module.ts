import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FirstComponent} from './component/first/first.component';
import {SecondComponent} from './component/second/second.component';
import {ThirdComponent} from './component/third/third.component';
import {PagenotfoundComponent} from './component/pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path:'first-component',component:FirstComponent},
  { path:'second-component',component:SecondComponent},
  { path:'third-component',component:ThirdComponent},
  { path: '' , redirectTo:'/first-component',pathMatch:'full'},
  { path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
