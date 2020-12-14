import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApiKeyFormComponent } from './api-key-form/api-key-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { MainStatisticsComponent } from './main-statistics/main-statistics.component';
import {StatsService} from './stats.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ApiKeyFormComponent,
    MainStatisticsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [StatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
