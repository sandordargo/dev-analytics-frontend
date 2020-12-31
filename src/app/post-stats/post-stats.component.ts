import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NumberFormat } from '../NumberFormat';

import StatsElement from '../StatsElement';

@Component({
  selector: 'app-post-stats',
  templateUrl: './post-stats.component.html',
  styleUrls: ['./post-stats.component.css']
})
export class PostStatsComponent implements OnChanges {


  @Input() public postAnalyticsJson: any;
  loaded = false;

  articlesWritten: any;
  totalViews: any;
  totalReactions: any;
  totalComments: any;
  mostViewedArticleRatioToTotal: any;
  mostReactedArticleRatioToTotal: any;
  mostCommentedArticleRatioToTotal: any;
  percentageOfArticlesGiving80PercentOfViews: any;
  percentageOfArticlesGiving80PercentOfReactions: any;
  percentageOfArticlesGiving80PercentOfComments: any;
  percentageOfArticlesGiving95PercentOfViews: any;
  percentageOfArticlesGiving95PercentOfReactions: any;
  percentageOfArticlesGiving95PercentOfComments: any;

  percentageFormat = NumberFormat.Percentage;
  normalFormat = NumberFormat.Normal;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if ('postAnalyticsJson' in changes) {
      Object.keys(this.postAnalyticsJson).forEach(key => {
          const statsElement = new StatsElement(key, this.postAnalyticsJson[key]);
          if (key === 'numberOfArticles') {
            this.articlesWritten = statsElement;
          }
          if (key === 'totalViews') {
            this.totalViews = statsElement;
          }
          if (key === 'totalReactions') {
            this.totalReactions = statsElement;
          }
          if (key === 'totalComments') {
            this.totalComments = statsElement;
          }
          if (key === 'mostViewedArticleRatioToTotal') {
            this.mostViewedArticleRatioToTotal = statsElement;
          }
          if (key === 'mostReactedArticleRatioToTotal') {
            this.mostReactedArticleRatioToTotal = statsElement;
          }
          if (key === 'mostCommentedArticleRatioToTotal') {
            this.mostCommentedArticleRatioToTotal = statsElement;
          }
          if (key === 'percentageOfArticlesGiving80PercentOfViews') {
            this.percentageOfArticlesGiving80PercentOfViews = statsElement;
          }
          if (key === 'percentageOfArticlesGiving80PercentOfReactions') {
            this.percentageOfArticlesGiving80PercentOfReactions = statsElement;
          }
          if (key === 'percentageOfArticlesGiving80PercentOfComments') {
            this.percentageOfArticlesGiving80PercentOfComments = statsElement;
          }
          if (key === 'percentageOfArticlesGiving95PercentOfViews') {
            this.percentageOfArticlesGiving95PercentOfViews = statsElement;
          }
          if (key === 'percentageOfArticlesGiving95PercentOfReactions') {
            this.percentageOfArticlesGiving95PercentOfReactions = statsElement;
          }
          if (key === 'percentageOfArticlesGiving95PercentOfComments') {
            this.percentageOfArticlesGiving95PercentOfComments = statsElement;
          }
        });
      this.loaded = true;
    }
  }

}
