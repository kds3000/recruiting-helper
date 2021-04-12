import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';
import {RouterModule} from '@angular/router';
import {vacanciesRoutes} from './vacancies.routing';
import { VacanciesComponent } from './vacancies/vacancies.component';



@NgModule({
  declarations: [
    VacancyListComponent,
    VacanciesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(vacanciesRoutes)
  ],
  exports: [
  ]
})
export class VacanciesModule { }
