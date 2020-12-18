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
  numberOfArticles: 'Number of articles you posted'
};

// const LABELS2 = {
//   numberOfArticles: {
//     en: 'Number of articles you posted'
// },
// totalViews: {
//   en: 'Number of views your articles got'
// },
// totalComments: {
//   en: 'Number of comments your articles received'
// },
// mostViewedArticleRatioToTotal: {
//   en: 'Views of your most viewed article / total views'
// },
// mostReactedArticleRatioToTotal: {
//   en: 'Reactions of your most reacted article / total reactions'
// },
// mostCommentedArticleRatioToTotal: {
//   en: 'Comments of your most commented article / total comments'
// },
// percentageOfArticlesGiving80PercentOfViews: {
//   en: 'The percentage of articles representing 80% of total views'
// },
// percentageOfArticlesGiving95PercentOfViews: {
//   en: 'The percentage of articles representing 95% of total views'
// },
// percentageOfArticlesGiving80PercentOfReactions: {
//   en: 'The percentage of articles representing 80% of total reactions'
// },
// percentageOfArticlesGiving95PercentOfReactions: {
//   en: 'The percentage of articles representing 95% of total reactions'
// },
// percentageOfArticlesGiving80PercentOfComments: {
//   en: 'The percentage of articles representing 80% of total comments'
// },
// percentageOfArticlesGiving95PercentOfComments: {
//   en: 'The percentage of articles representing 95% of total comments'
// },


// };
