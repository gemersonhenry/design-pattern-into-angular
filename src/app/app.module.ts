import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { InstanceService } from './services/instance.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';


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
    InstanceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
