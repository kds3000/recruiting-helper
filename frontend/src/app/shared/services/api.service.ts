import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Vacancy} from '../models/vacancy.model';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly apiPaths = {
    getVacancies: () => `${API_URL}/vacancies/`
  };

  constructor(private http: HttpClient) { }

  public getVacancies(): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(this.apiPaths.getVacancies());
  }
}
