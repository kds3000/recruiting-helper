import {Injectable} from '@angular/core';
import {Actions, ofType, createEffect} from '@ngrx/effects';
import {ApiService} from '../../shared/services/api.service';
import {
  loadVacancies, addVacancy, addVacancySuccess, loadVacanciesSuccess, loadVacanciesFailure, addVacancyFailure
} from '../actions/vacancies.actions';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Vacancy} from '../../shared/models/vacancy.model';
import {of} from 'rxjs';
import {Router} from '@angular/router';
import {VacanciesPaths} from '../../shared/enums/paths/vacancies-paths.enum';


@Injectable()
export class VacanciesEffects {
  $loadVacancies = createEffect(() => this.$actions.pipe(
    ofType(loadVacancies),
    switchMap(() => {
      return this.apiService.getVacancies().pipe(
        map((vacancies: Vacancy[]) => loadVacanciesSuccess({vacancies})),
        catchError((error) => of(loadVacanciesFailure({error})))
      );
    })
  ));

  $addVacancy = createEffect(() => this.$actions.pipe(
    ofType(addVacancy),
    switchMap(payload => {
      return this.apiService.createVacancy(payload.vacancyData).pipe(
        map((vacancy: Vacancy) => addVacancySuccess({vacancy})),
        catchError((error) => of(addVacancyFailure({error})))
      );
    })
  ));

  $addVacancySuccess = createEffect(() => this.$actions.pipe(
    ofType(addVacancySuccess),
    map(() => this.router.navigateByUrl(VacanciesPaths.list))
  ), {dispatch: false});


  constructor(
    private $actions: Actions,
    private apiService: ApiService,
    private router: Router
  ) {
  }
}
