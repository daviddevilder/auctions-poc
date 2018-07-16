import {Routes} from '@angular/router';
import {ClubComponent} from './club/club.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },{
        path: 'club/:clubId',
        component: ClubComponent
      },
      {
        path: '**',
        redirectTo: '/',
      }
    ]
  }
];
