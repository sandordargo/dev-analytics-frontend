import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-statistics',
  templateUrl: './main-statistics.component.html',
  styleUrls: ['./main-statistics.component.css']
})
export class MainStatisticsComponent implements OnInit {
  x = 20;

  constructor() { }

  ngOnInit(): void {
  }

  doSomething(): void {
    this.x += 1;
    console.log('sg', this.x);
  }

}
