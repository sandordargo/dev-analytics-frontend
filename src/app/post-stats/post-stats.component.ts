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
  averageViews: any;
  averageComments: any;
  averageReactions: any;
  averageViewsForTop80Percent: any;
  averageReactionsForTop80Percent: any;
  averageCommentsForTop80Percent: any;
  averageViewsForTop95Percent: any;
  averageReactionsForTop95Percent: any;
  averageCommentsForTop95Percent: any;


  fiveMostViewedArticles: any;
  mostViewedArticlesHeader = 'Expand for the 5 most viewed articles...';
  fiveMostReactedArticles: any;
  mostReactedArticlesHeader = 'Expand for the 5 most reacted articles...';
  fiveMostCommentedArticles: any;
  mostCommentedArticlesHeader = 'Expand for the 5 most commented articles...';

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
          if (key === 'fiveMostViewedArticles') {
            this.fiveMostViewedArticles = this.postAnalyticsJson[key];
          }
          if (key === 'fiveMostReactedArticles') {
            this.fiveMostReactedArticles = this.postAnalyticsJson[key];
          }
          if (key === 'fiveMostCommentedArticles') {
            this.fiveMostCommentedArticles = this.postAnalyticsJson[key];
          }
          if (key === 'averageViews') {
            this.averageViews = statsElement;
          }
          if (key === 'averageReactions') {
            this.averageReactions = statsElement;
          }
          if (key === 'averageComments') {
            this.averageComments = statsElement;
          }
          if (key === 'averageViewsForTop80Percent') {
            this.averageViewsForTop80Percent = statsElement;
          }
          if (key === 'averageReactionsForTop80Percent') {
            this.averageReactionsForTop80Percent = statsElement;
          }
          if (key === 'averageCommentsForTop80Percent') {
            this.averageCommentsForTop80Percent = statsElement;
          }
          if (key === 'averageViewsForTop95Percent') {
            this.averageViewsForTop95Percent = statsElement;
          }
          if (key === 'averageReactionsForTop95Percent') {
            this.averageReactionsForTop95Percent = statsElement;
          }
          if (key === 'averageCommentsForTop95Percent') {
            this.averageCommentsForTop95Percent = statsElement;
          }
        });
      this.loaded = true;
    }
  }

}
