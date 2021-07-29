import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import HomeComponent from './pages/home/home.component';
import SecondaryComponent from './pages/secondary/secondary.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, SecondaryComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
