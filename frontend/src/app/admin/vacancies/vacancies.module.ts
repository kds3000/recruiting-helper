import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';
import {RouterModule} from '@angular/router';
import {vacanciesRoutes} from './vacancies.routing';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { VacancyCreateComponent } from './vacancy-create/vacancy-create.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    VacancyListComponent,
    VacanciesComponent,
    VacancyCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(vacanciesRoutes),
    ReactiveFormsModule
  ],
  exports: [
  ]
})
export class VacanciesModule { }
