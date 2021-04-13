import { Component, OnInit } from '@angular/core';
import {VacanciesPaths} from '../../../shared/enums/paths/vacancies-paths.enum';
import {Store} from '@ngrx/store';
import {LoadVacancies} from '../../../ngrx-store/actions/vacancies.actions';
import {Observable} from 'rxjs';
import {Vacancy} from '../../../shared/models/vacancy.model';
import {AppState} from '../../../ngrx-store';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {

  readonly vacanciesPaths: typeof VacanciesPaths = VacanciesPaths;
  public vacancies$: Observable<Vacancy[]>;

  constructor(private store: Store<AppState>) {
    this.vacancies$ = this.store.select(appStore => appStore.vacancies.vacancies);
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadVacancies());
  }

}
