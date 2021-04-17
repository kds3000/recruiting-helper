import {Routes} from '@angular/router';
import {AdminLayoutComponent} from './admin/admin-layout/admin-layout.component';

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
      }
    ]
  },
];
