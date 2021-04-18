import { createSelector, createFeatureSelector, ActionReducerMap } from '@ngrx/store';
import * as fromVacancies from './reducers/vacancies.reducers';

export interface AppState {
  vacancies: fromVacancies.VacanciesState;
}

export const reducers: ActionReducerMap<AppState> = {
  vacancies: fromVacancies.vacanciesReducer,
};

export const selectVacanciesState = createFeatureSelector<fromVacancies.VacanciesState>('vacancies');

export const selectAllVacancies = createSelector(
  selectVacanciesState,
  fromVacancies.selectAllVacancies
);
