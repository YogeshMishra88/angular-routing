import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {FirstComponent} from './component/first/first.component';
import {SecondComponent} from './component/second/second.component';
import {ThirdComponent} from './component/third/third.component';
import {PagenotfoundComponent} from './component/pagenotfound/pagenotfound.component';
import {FirstaComponent} from './component/first/firsta/firsta.component';
import {FirstbComponent} from './component/first/firstb/firstb.component';
import {FirstcComponent} from './component/first/firstc/firstc.component';

const routes: Routes = [
  { path:'first-component',component:FirstComponent,
  children:[
    { path:'first-a',component:FirstaComponent},
    { path:'first-b',component:FirstbComponent},
    { path:'first-c',component:FirstcComponent},
    { path:'',redirectTo:"/first-component/first-a",pathMatch:'full'}
  ]
},
  { path:'second-component',component:SecondComponent},
  { path:'third-component',component:ThirdComponent},
  { path: '' , redirectTo:'/first-component/first-a',pathMatch:'full'},
  { path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
