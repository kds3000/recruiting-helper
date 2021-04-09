import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';



@NgModule({
  declarations: [
    VacancyListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VacancyListComponent
  ]
})
export class VacanciesModule { }
