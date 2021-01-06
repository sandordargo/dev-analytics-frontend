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
  averageViews: 'Average views per article',
  averageComments: 'Average comments per article',
  averageReactions: 'Average reactions per article',
  averageViewsForTop80Percent: 'Average views per article for articles generating 80% of your views',
  averageReactionsForTop80Percent: 'Average reactions per article for articles generating 80% of your reactions',
  averageCommentsForTop80Percent: 'Average comments per article for articles generating 80% of your comments',
  averageViewsForTop95Percent: 'Average views per article for articles generating 95% of your views',
  averageReactionsForTop95Percent: 'Average reactions per article for articles generating 95% of your reactions',
  averageCommentsForTop95Percent: 'Average comments per article for articles generating 95% of your comments',
};

// const TAG_LABELS: {[statsName: string]: {[name: string]: number}} = {

// };
