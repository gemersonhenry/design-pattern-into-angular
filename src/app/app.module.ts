import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { InstanceService } from './services/instance.service';
import { HttpBase } from './services/http-base.service';
import { AppService } from './services/app-service.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    InstanceService,
    HttpBase,
    AppService,
    HttpClientModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
