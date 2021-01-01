import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {
  @Input() public header = '';
  @Input() public articleList: any;

  constructor() { }

  ngOnInit(): void {
  }

}
