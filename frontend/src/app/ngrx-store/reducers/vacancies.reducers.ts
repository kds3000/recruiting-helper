import {Vacancy} from '../../shared/models/vacancy.model';
import * as VacanciesActions from './../actions/vacancies.actions';

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

export function vacanciesReducer(
  state: VacanciesState = initialState,
  action: VacanciesActions.VacanciesActions
): VacanciesState {
  switch (action.type) {
    case VacanciesActions.LOAD_VACANCIES:
      return {
        ...state,
        loading: true
      };
    case VacanciesActions.LOAD_VACANCIES_SUCCESS:
      return {
        ...state,
        vacancies: action.payload,
        loading: false
      };
    case VacanciesActions.LOAD_VACANCIES_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case VacanciesActions.ADD_VACANCY:
      return {
        ...state,
        loading: true
      };
    case VacanciesActions.ADD_VACANCY_SUCCESS:
      return {
        ...state,
        vacancies: [...state.vacancies, action.payload],
        loading: false
      };
    case VacanciesActions.ADD_VACANCY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
