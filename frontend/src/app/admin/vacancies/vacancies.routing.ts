import {Routes} from '@angular/router';
import {VacancyListComponent} from './vacancy-list/vacancy-list.component';
import {VacanciesComponent} from './vacancies/vacancies.component';
import {VacancyCreateComponent} from './vacancy-create/vacancy-create.component';

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
      {
        path: 'create',
        component: VacancyCreateComponent,
        pathMatch: 'full'
      },
    ]
  },
];
