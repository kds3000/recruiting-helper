import {Action} from '@ngrx/store';
import {Vacancy, VacancyData} from '../../shared/models/vacancy.model';

export const LOAD_VACANCIES = '[Vacancies] Load Vacancies';
export const LOAD_VACANCIES_SUCCESS = '[Vacancies] Load Vacancies Success';
export const LOAD_VACANCIES_FAILURE = '[Vacancies] Load Vacancies Failure';

export const ADD_VACANCY = '[Vacancies] Add Vacancy';
export const ADD_VACANCY_SUCCESS = '[Vacancies] Add Vacancy Success';
export const ADD_VACANCY_FAILURE = '[Vacancies] Add Vacancy Failure';

export class LoadVacancies implements Action {
  readonly type = LOAD_VACANCIES;
}

export class LoadVacanciesSuccess implements Action {
  readonly type = LOAD_VACANCIES_SUCCESS;

  constructor(public payload: Vacancy[]) {
  }
}

export class LoadVacanciesFailure implements Action {
  readonly type = LOAD_VACANCIES_FAILURE;

  constructor(public payload: Error) {
  }
}

export class AddVacancy implements Action {
  readonly type = ADD_VACANCY;

  constructor(public payload: VacancyData) {
  }
}

export class AddVacancySuccess implements Action {
  readonly type = ADD_VACANCY_SUCCESS;

  constructor(public payload: Vacancy) {
  }
}

export class AddVacancyFailure implements Action {
  readonly type = ADD_VACANCY_FAILURE;

  constructor(public payload: Error) {
  }
}

export type VacanciesActions =
  | AddVacancy
  | AddVacancySuccess
  | AddVacancyFailure
  | LoadVacancies
  | LoadVacanciesSuccess
  | LoadVacanciesFailure;
