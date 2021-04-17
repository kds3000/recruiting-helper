import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../../shared/services/api.service';
import {Router} from '@angular/router';
import {AppState} from '../../../ngrx-store';
import {Store} from '@ngrx/store';
import {addVacancy} from '../../../ngrx-store/actions/vacancies.actions';
import {VacanciesPaths} from '../../../shared/enums/paths/vacancies-paths.enum';

@Component({
  selector: 'app-vacancy-create',
  templateUrl: './vacancy-create.component.html',
  styleUrls: ['./vacancy-create.component.css']
})
export class VacancyCreateComponent implements OnInit {

  readonly vacanciesPaths: typeof VacanciesPaths = VacanciesPaths;
  public vacancyForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.vacancyForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  createVacancy(): void {
    this.store.dispatch(addVacancy({vacancyData: this.vacancyForm.value}));
  }

}
