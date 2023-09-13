import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

export default [
  {
    path: '',
    component: AppComponent,
    children: [{ path: '', component: LandingPageComponent }]
  }
] as Route[];
