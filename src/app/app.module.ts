import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { BaseModule } from './modules/base.module';
import { RouterModule } from '@angular/router';
import { FirstpageComponent } from './pages/firstpage/firstpage.component';
import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BaseTemplateComponent } from './pages/base-template.component';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CosmeticsPageComponent } from './pages/cosmetics-page/cosmetics-page.component';
import { CosmeticsSingleComponent } from './pages/cosmetics-single/cosmetics-single.component';
import { ElectronicsComponent } from './pages/electronics/electronics.component';
import { ArtsComponent } from './pages/arts/arts.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    FirstpageComponent,
    BaseTemplateComponent,
    CosmeticsPageComponent,
    CosmeticsSingleComponent,
    ElectronicsComponent,
    ArtsComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    BaseModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
