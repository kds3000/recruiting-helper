import {Routes} from '@angular/router';
import {VacancyListComponent} from './vacancy-list/vacancy-list.component';
import {VacanciesComponent} from './vacancies/vacancies.component';

export const vacanciesRoutes: Routes = [
  {
    path: '',
    component: VacanciesComponent,
    children: [
      {
        path: '',
        component: VacancyListComponent,
        pathMatch: 'full'
      },
    ]
  },
];
