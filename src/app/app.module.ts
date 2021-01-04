import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ApiKeyFormComponent } from './api-key-form/api-key-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {StatsService} from './stats.service';
import {HttpClientModule} from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StatsCardComponent } from './stats-card/stats-card.component';
import { TagStatsCardComponent } from './tag-stats-card/tag-stats-card.component';
import { TagStatsComponent } from './tag-stats/tag-stats.component';
import { PostStatsComponent } from './post-stats/post-stats.component';
import { ArticleListComponent } from './article-list/article-list.component';

import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    ApiKeyFormComponent,
    StatsCardComponent,
    TagStatsCardComponent,
    TagStatsComponent,
    PostStatsComponent,
    ArticleListComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    LoadingBarHttpClientModule,
    FontAwesomeModule,
  ],
  providers: [StatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
