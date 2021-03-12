import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home/home.component';
import { NewCaseSecuritiasComponent } from './NewCase/new-case-securitias/new-case-securitias.component';
import { NewCaseHomeComponent } from './NewCase/new-case-home/new-case-home.component';
import { NewCaseKPMGComponent } from './NewCase/new-case-kpmg/new-case-kpmg.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewCaseSecuritiasComponent,
    NewCaseHomeComponent,
    NewCaseKPMGComponent
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
