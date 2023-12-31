import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ScheduleFormComponent } from './schedule-form/schedule-form.component';
import { ScheduleDetailsComponent } from './schedule-details/schedule-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ScheduleFormComponent,
    ScheduleDetailsComponent
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
