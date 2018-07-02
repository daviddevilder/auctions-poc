import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    // children: [
    //   {
    //     path: '',
    //     pathMatch: 'full',
    //     component: DashboardComponent
    //   }
    // ]
  },
  {
    path: '**',
    redirectTo: '/error/notfound',
  }
];
