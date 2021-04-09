import {Routes} from '@angular/router';
import {VacancyListComponent} from './admin/vacancies/vacancy-list/vacancy-list.component';

export const rootRouterConfig: Routes = [
  {
    path: '',
    component: VacancyListComponent,
    pathMatch: 'full'
  }
];
