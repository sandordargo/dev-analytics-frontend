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
  mostReactedTag: any;
  mostViewedTag: any;
  tagWithMostCommentsPerArticle: any;
  tagWithMostReactionsPerArticle: any;
  tagWithMostViewsPerArticle: any;
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
        // this.tagStats.push(tagStatsElement);
      });
      this.loaded = true;
    }
  }

}
