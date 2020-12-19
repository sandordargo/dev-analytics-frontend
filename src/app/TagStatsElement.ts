export default class TagStatsElement {
  public label: string;
  constructor(public key: string, public tag: string, public value: string) {
    if (key in LABELS) {
      this.label = LABELS[key];
    } else {
      this.label = key;
    }
  }
}

const LABELS: {[name: string]: string} = {
  numberOfArticles: 'Number of articles you posted',
  totalViews: 'Number of views your articles got',
  totalReactions: 'Number of reactions your articles got',
  totalComments: 'Number of comments your articles received',
  mostViewedArticleRatioToTotal: 'Views of your most viewed article / total views',
  mostReactedArticleRatioToTotal: 'Reactions of your most reacted article / total reactions',
  mostCommentedArticleRatioToTotal: 'Comments of your most commented article / total comments',
  percentageOfArticlesGiving80PercentOfViews: 'The percentage of articles representing 80% of total views',
  percentageOfArticlesGiving95PercentOfViews: 'The percentage of articles representing 95% of total views',
  percentageOfArticlesGiving80PercentOfReactions: 'The percentage of articles representing 80% of total reactions',
  percentageOfArticlesGiving95PercentOfReactions: 'The percentage of articles representing 95% of total reactions',
  percentageOfArticlesGiving80PercentOfComments: 'The percentage of articles representing 80% of total comments',
  percentageOfArticlesGiving95PercentOfComments: 'The percentage of articles representing 95% of total comments',
  // ...
  mostCommentedTag: 'Your most commented tag',
  mostReactedTag: 'Your most reacted tag',
  mostViewedTag: 'Your most viewed tag',
  tagWithMostCommentsPerArticle: 'Tag having the most comments per article',
  tagWithMostReactionsPerArticle: 'Tag having the most reactions per article',
  tagWithMostViewsPerArticle: 'Tag having the most views per article',
};

// const TAG_LABELS: {[statsName: string]: {[name: string]: number}} = {

// };
