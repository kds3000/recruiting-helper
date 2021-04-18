import {Vacancy, VacancyData} from '../../shared/models/vacancy.model';
import { createAction, props } from '@ngrx/store';


export const selectVacancy = createAction(
  '[Vacancies] Select Vacancy',
  props<{userId: number}>()
);

export const loadVacancies = createAction(
  '[Vacancies] Load Vacancies'
);
export const loadVacanciesSuccess = createAction(
  '[Vacancies] Load Vacancies Success',
  props<{vacancies: Vacancy[]}>()
);
export const loadVacanciesFailure = createAction(
  '[Vacancies] Load Vacancies Failure',
  props<{error: Error}>()
);

export const addVacancy = createAction(
  '[Vacancies] Add Vacancy',
  props<{vacancyData: VacancyData}>()
);
export const addVacancySuccess = createAction(
  '[Vacancies] Add Vacancy Success',
  props<{vacancy: Vacancy}>()
);
export const addVacancyFailure = createAction(
  '[Vacancies] Add Vacancy Failure',
  props<{error: Error}>()
);
