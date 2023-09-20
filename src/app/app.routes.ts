import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'discover',
    pathMatch: 'full'
  },
  {
    path: 'discover',
    loadComponent: () => import('./app.component').then(m => m.AppComponent),
  }
];
