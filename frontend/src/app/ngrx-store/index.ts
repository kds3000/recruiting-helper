import { createSelector } from '@ngrx/store';
import {VacanciesState} from './reducers/vacancies.reducers';

export interface AppState {
  vacancies: VacanciesState;
}

export const selectVacancies = (state: AppState) => state.vacancies;

export const selectAllVacancies = createSelector(
  selectVacancies,
  (state: VacanciesState) => state.vacancies
);
