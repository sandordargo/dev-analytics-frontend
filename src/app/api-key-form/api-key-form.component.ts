import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {StatsService} from '../stats.service';
import StatsElement from '../StatsElement';
import TagStatsElement from '../TagStatsElement';
import { NumberFormat } from '../NumberFormat';

@Component({
  selector: 'app-api-key-form',
  templateUrl: './api-key-form.component.html',
  styleUrls: ['./api-key-form.component.css']
})
export class ApiKeyFormComponent implements OnInit {

  form: FormGroup;
  x = 0;
  content: any;
  jsonContent: any;
  loaded = false;
  // articleStats: StatsElement[] = [];
  // tagStats: TagStatsElement[] = [];
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

  mostCommentedTag: any;
  mostReactedTag: any;
  mostViewedTag: any;
  tagWithMostCommentsPerArticle: any;
  tagWithMostReactionsPerArticle: any;
  tagWithMostViewsPerArticle: any;
  percentageFormat = NumberFormat.Percentage;
  normalFormat = NumberFormat.Normal;

  constructor(public fb: FormBuilder, private statsService: StatsService) {
    this.form = fb.group({
      apiKey: ['']
    });
  }

  ngOnInit(): void {
  }

  getStats(): void {
    this.x += 1;
    const key = this.form.get('apiKey')?.value;
    const reply = this.statsService.getStats(key);

    reply.then(value => {
      this.content = JSON.stringify(value);
      this.jsonContent = value;
      // this.articleStats.length = 0;
      // this.tagStats.length = 0;
      Object.keys(this.jsonContent['article_analytics']).forEach(key => {
        const statsElement = new StatsElement(key, this.jsonContent['article_analytics'][key]);
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
        // this.articleStats.push(statsElement);
      });
      Object.keys(this.jsonContent['tag_analytics']).forEach(key => {
        const tagStatsElement = new TagStatsElement(key,
          this.jsonContent['tag_analytics'][key]["name"],
          this.jsonContent['tag_analytics'][key].count);
        if (key === 'mostCommentedTag') {
          this.mostCommentedTag = tagStatsElement;
        }
        if (key === 'mostReactedTag') {
          this.mostReactedTag = tagStatsElement;
        }
        if (key === 'mostViewedTag') {
          this.mostViewedTag = tagStatsElement;
        }
        if (key === 'tagWithMostCommentsPerArticle') {
          this.tagWithMostCommentsPerArticle = tagStatsElement;
        }
        if (key === 'tagWithMostReactionsPerArticle') {
          this.tagWithMostReactionsPerArticle = tagStatsElement;
        }
        if (key === 'tagWithMostViewsPerArticle') {
          this.tagWithMostViewsPerArticle = tagStatsElement;
        }
        // this.tagStats.push(tagStatsElement);
      });
      this.loaded = true;
    });

  }

}
