import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { InstanceService } from './services/instance.service';
import { HttpBase } from './services/http-base.service';
import { AppService } from './services/app-service.service';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ViewsModule } from './views/views.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ViewsModule,
  ],
  providers: [
    InstanceService,
    HttpBase,
    AppService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
