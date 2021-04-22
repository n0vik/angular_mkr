import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SetupPageComponent } from './setup-page/setup-page.component';

const routers = [
  {path: '', component: HomePageComponent},
  {path: 'setup', component: SetupPageComponent}
];

@NgModule({
 declarations: [
   AppComponent,
   HomePageComponent,
   SetupPageComponent
 ],
 imports: [
   BrowserModule,
   RouterModule.forRoot(routers)
 ],
 providers: [],
 bootstrap: [AppComponent]
})

export class AppModule { }