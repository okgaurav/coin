import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { BaseModule } from './modules/base.module';
import { RouterModule } from '@angular/router';
import { FirstpageComponent } from './pages/firstpage/firstpage.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BaseTemplateComponent } from './pages/base-template.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ChipsModule} from "primeng/chips";
import {CalendarModule} from "primeng/calendar";
import {DropdownModule} from "primeng/dropdown";
import {DatePipe} from "@angular/common";
import DateFormatPipe from "./date-format.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    FirstpageComponent,
    BaseTemplateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    BaseModule,
    ChipsModule,
    CalendarModule,
    DropdownModule,
  ],
  providers: [DateFormatPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
