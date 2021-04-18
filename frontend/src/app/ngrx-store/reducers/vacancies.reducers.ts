import {Vacancy} from '../../shared/models/vacancy.model';
import * as VacanciesActions from './../actions/vacancies.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface VacanciesState extends EntityState<Vacancy> {
  loading: boolean;
  error: Error;
  selectedVacancyId: number;
}

export const vacanciesAdapter: EntityAdapter<Vacancy> = createEntityAdapter<Vacancy>();

const initialState: VacanciesState = vacanciesAdapter.getInitialState({
  loading: false,
  error: null,
  selectedVacancyId: null
});

const reducer = createReducer(
  initialState,
  on(VacanciesActions.loadVacancies, state => ({
    ...state,
    loading: true
  })),
  on(VacanciesActions.loadVacanciesSuccess, (state, {vacancies}) => {
    return vacanciesAdapter.setAll(vacancies, {...state, loading: false});
  }),
  on(VacanciesActions.loadVacanciesFailure, (state, {error}) => ({
    ...state,
    error,
    loading: false
  })),
  on(VacanciesActions.addVacancy, state => ({
    ...state,
    loading: true
  })),
  on(VacanciesActions.addVacancySuccess, (state, {vacancy}) => {
    return vacanciesAdapter.addOne(vacancy, {...state, loading: false});
  }),
  on(VacanciesActions.addVacancyFailure, (state, {error}) => ({
    ...state,
    loading: false,
    error
  })),
);

export function vacanciesReducer(state: VacanciesState | undefined, action: Action): VacanciesState {
  return reducer(state, action);
}

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = vacanciesAdapter.getSelectors();

export const selectVacancyIds = selectIds;
export const selectVacancyEntities = selectEntities;
export const selectAllVacancies = selectAll;
export const selectVacancyTotal = selectTotal;
