import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'discover',
    pathMatch: 'full'
  },
  {
    path: 'discover',
    loadComponent: () => import('./ui/main/main.component')
  }
];
