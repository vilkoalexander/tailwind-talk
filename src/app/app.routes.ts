import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'scss',
    loadChildren: () => import('./scss/scss.module').then((m) => m.ScssModule),
  },
];
