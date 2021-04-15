import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {rootRouterConfig} from './app.routing';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {vacanciesReducer} from './ngrx-store/reducers/vacancies.reducers';
import {EffectsModule} from '@ngrx/effects';
import {VacanciesEffects} from './ngrx-store/effects/vacancies.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(rootRouterConfig),
    StoreModule.forRoot({vacancies: vacanciesReducer}),
    EffectsModule.forRoot([VacanciesEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
