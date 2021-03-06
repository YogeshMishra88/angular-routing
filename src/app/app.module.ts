import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './component/first/first.component';
import { SecondComponent } from './component/second/second.component';
import { ThirdComponent } from './component/third/third.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import { FirstaComponent } from './component/first/firsta/firsta.component';
import { FirstbComponent } from './component/first/firstb/firstb.component';
import { FirstcComponent } from './component/first/firstc/firstc.component';
import { FourthComponent } from './component/fourth/fourth.component';
import { CustomersModule } from './customers/customers.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    PagenotfoundComponent,
    FirstaComponent,
    FirstbComponent,
    FirstcComponent,
    FourthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
