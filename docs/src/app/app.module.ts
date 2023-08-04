import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutPageModule } from './about-page/about-page.module';
import { HomePageModule } from './home-page/home-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AboutPageModule,
    HomePageModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
