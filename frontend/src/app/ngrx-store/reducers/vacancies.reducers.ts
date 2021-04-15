import {Vacancy} from '../../shared/models/vacancy.model';
import * as VacanciesActions from './../actions/vacancies.actions';
import { Action, createReducer, on } from '@ngrx/store';

export interface VacanciesState {
  vacancies: Vacancy[];
  loading: boolean;
  error: Error;
}

const initialState: VacanciesState = {
  vacancies: [],
  loading: false,
  error: null
};

const reducer = createReducer(
  initialState,
  on(VacanciesActions.loadVacancies, state => ({
    ...state,
    loading: true
  })),
  on(VacanciesActions.loadVacanciesSuccess, (state, {vacancies}) => ({
    ...state,
    vacancies,
    loading: false
  })),
  on(VacanciesActions.loadVacanciesFailure, (state, {error}) => ({
    ...state,
    error,
    loading: false
  })),
  on(VacanciesActions.addVacancy, state => ({
    ...state,
    loading: true
  })),
  on(VacanciesActions.addVacancySuccess, (state, {vacancy}) => ({
    ...state,
    vacancies: [...state.vacancies, vacancy],
    loading: false
  })),
  on(VacanciesActions.addVacancyFailure, (state, {error}) => ({
    ...state,
    loading: false,
    error
  })),
);

export function vacanciesReducer(state: VacanciesState | undefined, action: Action): VacanciesState {
  return reducer(state, action);
}
