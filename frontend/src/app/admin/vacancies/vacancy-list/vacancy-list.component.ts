import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../../shared/services/api.service';
import {Vacancy} from '../../../shared/models/vacancy.model';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {

  public vacancies: Vacancy[];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getVacancies().subscribe(
      vacancies => {
        this.vacancies = vacancies;
      }
    );
  }

}
