import {Routes} from '@angular/router';

export const adminRoutes: Routes = [
  {
    path: '',
    redirectTo: 'vacancies',
    pathMatch: 'full'
  },
  {
    path: 'vacancies',
    children: [
      {
        path: '',
        loadChildren: () => import('./vacancies/vacancies.module').then(m => m.VacanciesModule),
      }
    ]
  },
];
