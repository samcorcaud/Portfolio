import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TopbarComponent} from './components/topbar/topbar.component';

import {AppService} from './service/app.service';
import {HomeComponent} from './components/home/home.component';
import {RootComponent} from './components/root/root.component';
import {AboutComponent} from './components/about/about.component';
import {ResumeComponent} from './components/resume/resume.component';
import {ContactComponent} from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    HomeComponent,
    RootComponent,
    AboutComponent,
    ResumeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
