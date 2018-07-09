import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AppComponent} from "./app.component";

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: '**',
        redirectTo: '/error/notfound',
      }
    ]
  }
];
