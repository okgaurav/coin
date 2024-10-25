import {FirstpageComponent} from './pages/firstpage/firstpage.component';
import {BaseTemplateComponent} from './pages/base-template.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  { path: '', redirectTo: 'app/firstpage', pathMatch: 'full' },
  {
    path: 'app',
      component: BaseTemplateComponent,
    children: [
      { path: 'firstpage', component: FirstpageComponent },
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
