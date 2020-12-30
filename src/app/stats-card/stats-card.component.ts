import { Component, Input, OnInit } from '@angular/core';
import StatsElement from '../StatsElement';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.css']
})

export class StatsCardComponent implements OnInit {
  @Input() public statsElement = new StatsElement('', '');
  @Input() public numberFormat = '1.0';
  @Input() public quantifier = '';


  constructor() {
  }

  ngOnInit(): void {
  }

}
