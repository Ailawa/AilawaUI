import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home/home.component';
import { NewCaseHomeComponent } from './NewCase/new-case-home/new-case-home.component';
import { NewCaseUploadComponent } from './NewCase/new-case-upload/new-case-upload.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewCaseHomeComponent,
    NewCaseUploadComponent
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
