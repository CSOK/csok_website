import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { WhoComponent } from './who/who.component';
import { WhatComponent } from './what/what.component';
import { StoriesComponent } from './stories/stories.component';
import { PicturesComponent } from './pictures/pictures.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    WhoComponent,
    WhatComponent,
    StoriesComponent,
    PicturesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
