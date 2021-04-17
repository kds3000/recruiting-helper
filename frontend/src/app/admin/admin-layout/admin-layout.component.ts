import { Component, OnInit } from '@angular/core';
import {VacanciesPaths} from '../../shared/enums/paths/vacancies-paths.enum';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit {

  readonly vacanciesPaths: typeof VacanciesPaths = VacanciesPaths;

  constructor() { }

  ngOnInit(): void {
  }

}
