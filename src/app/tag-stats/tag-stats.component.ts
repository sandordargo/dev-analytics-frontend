import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NumberFormat } from '../NumberFormat';

import TagStatsElement from '../TagStatsElement';

@Component({
  selector: 'app-tag-stats',
  templateUrl: './tag-stats.component.html',
  styleUrls: ['./tag-stats.component.css']
})
export class TagStatsComponent implements OnChanges {

  @Input() public tagAnalyticsJson: any;
  loaded = false;

  mostCommentedTag: any;
  fiveMostViewedTags: any;
  mostReactedTag: any;
  fiveMostCommentedTags: any;
  mostViewedTag: any;
  fiveMostReactedTags: any;
  tagWithMostCommentsPerArticle: any;
  fiveTagsWithMostViewsPerArticle: any;
  tagWithMostReactionsPerArticle: any;
  fiveTagsWithMostReactionsPerArticle: any;
  tagWithMostViewsPerArticle: any;
  fiveTagsWithMostCommentsPerArticle: any;
  percentageFormat = NumberFormat.Percentage;
  normalFormat = NumberFormat.Normal;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if ('tagAnalyticsJson' in changes) {
      Object.keys(this.tagAnalyticsJson).forEach(key => {
        const tagStatsElement = new TagStatsElement(key,
          this.tagAnalyticsJson[key].name,
          this.tagAnalyticsJson[key].count);
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
        if (key === 'fiveMostViewedTags') {
          this.fiveMostViewedTags = this.tagAnalyticsJson[key];
        }
        if (key === 'fiveMostCommentedTags') {
          this.fiveMostCommentedTags = this.tagAnalyticsJson[key];
        }
        if (key === 'fiveMostReactedTags') {
          this.fiveMostReactedTags = this.tagAnalyticsJson[key];
        }
        if (key === 'fiveTagsWithMostViewsPerArticle') {
          this.fiveTagsWithMostViewsPerArticle = this.tagAnalyticsJson[key];
        }
        if (key === 'fiveTagsWithMostReactionsPerArticle') {
          this.fiveTagsWithMostReactionsPerArticle = this.tagAnalyticsJson[key];
        }
        if (key === 'fiveTagsWithMostCommentsPerArticle') {
          this.fiveTagsWithMostCommentsPerArticle = this.tagAnalyticsJson[key];
        }

        // this.tagStats.push(tagStatsElement);
      });
      this.loaded = true;
    }
  }

}
