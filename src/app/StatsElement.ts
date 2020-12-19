export default class StatsElement {
  public label: string;
  constructor(public key: string, public value: string) {
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
};

