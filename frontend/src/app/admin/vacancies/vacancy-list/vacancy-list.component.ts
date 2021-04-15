import { Component, OnInit } from '@angular/core';
import {VacanciesPaths} from '../../../shared/enums/paths/vacancies-paths.enum';
import {Store} from '@ngrx/store';
import {loadVacancies} from '../../../ngrx-store/actions/vacancies.actions';
import {Observable} from 'rxjs';
import {Vacancy} from '../../../shared/models/vacancy.model';
import {selectAllVacancies} from '../../../ngrx-store';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {

  readonly vacanciesPaths: typeof VacanciesPaths = VacanciesPaths;
  public vacancies$: Observable<Vacancy[]>;

  constructor(
    private store: Store
  ) {
    this.vacancies$ = this.store.select(selectAllVacancies);
  }

  ngOnInit(): void {
    this.store.dispatch(loadVacancies());
  }

}
