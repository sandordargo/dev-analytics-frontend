import { Component, Input, OnInit } from '@angular/core';
import TagStatsElement from '../TagStatsElement';

@Component({
  selector: 'app-tag-stats-card',
  templateUrl: './tag-stats-card.component.html',
  styleUrls: ['./tag-stats-card.component.css']
})
export class TagStatsCardComponent implements OnInit {
  @Input() public statsElement = new TagStatsElement('', '', '');
  @Input() public numberFormat = '1.0';
  @Input() public quantifier = '';
  @Input() public tagList: any;

  constructor() { }

  ngOnInit(): void {
  }

}
