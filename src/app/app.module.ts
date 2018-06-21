import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//additional component
import{FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  // bootstrap: [AppComponent]
  bootstrap: [AppComponent]
})
export class AppModule { }
