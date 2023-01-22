import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { CosmeticsPageComponent } from './pages/cosmetics-page/cosmetics-page.component';
import { FirstpageComponent } from './pages/firstpage/firstpage.component';
import { BaseTemplateComponent } from './pages/base-template.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ElectronicsComponent } from './pages/electronics/electronics.component';
import { ArtsComponent } from './pages/arts/arts.component';

const routes: Routes = [
  { path: '', redirectTo: 'app/firstpage', pathMatch: 'full' },
  {
    path: 'app',
      component: BaseTemplateComponent,
    children: [
      { path: 'firstpage', component: FirstpageComponent },
      { path: 'cosmetics', component: CosmeticsPageComponent },
      { path: 'electronics', component: ElectronicsComponent },
      { path: 'arts', component: ArtsComponent },
      
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

/*

    Security is still pending

*/
