import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {ApiService} from '../../shared/services/api.service';
import {
  LOAD_VACANCIES,
  LoadVacanciesSuccess, LoadVacanciesFailure,
  ADD_VACANCY,
  AddVacancy, AddVacancySuccess, AddVacancyFailure, ADD_VACANCY_SUCCESS
} from '../actions/vacancies.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Vacancy} from '../../shared/models/vacancy.model';
import {of} from 'rxjs';
import {Router} from '@angular/router';
import {VacanciesPaths} from '../../shared/enums/paths/vacancies-paths.enum';


@Injectable()
export class VacanciesEffects {
  @Effect()
  $loadVacancies = this.$actions.pipe(
    ofType(LOAD_VACANCIES),
    switchMap(() => {
      return this.apiService.getVacancies().pipe(
        map((vacancies: Vacancy[]) => new LoadVacanciesSuccess(vacancies)),
        catchError((error) => of(new LoadVacanciesFailure(error)))
      );
    })
  );

  @Effect()
  $addVacancy = this.$actions.pipe(
    ofType(ADD_VACANCY),
    switchMap((action: AddVacancy) => {
      return this.apiService.createVacancy(action.payload).pipe(
        map((vacancy: Vacancy) => new AddVacancySuccess(vacancy)),
        catchError((error) => of(new AddVacancyFailure(error)))
      );
    })
  );

  @Effect({dispatch: false})
  $addVacancySuccess = this.$actions.pipe(
    ofType(ADD_VACANCY_SUCCESS),
    map(() => this.router.navigateByUrl(VacanciesPaths.list))
  );

  constructor(
    private $actions: Actions,
    private apiService: ApiService,
    private router: Router
  ) {
  }
}
