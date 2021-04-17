import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';
import {RouterModule} from '@angular/router';
import {vacanciesRoutes} from './vacancies.routing';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { VacancyCreateComponent } from './vacancy-create/vacancy-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [
    VacancyListComponent,
    VacanciesComponent,
    VacancyCreateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(vacanciesRoutes),
    ReactiveFormsModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports: [
  ]
})
export class VacanciesModule { }
