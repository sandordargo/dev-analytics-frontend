import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {StatsService} from '../stats.service';
import {MainStatisticsComponent} from '../main-statistics/main-statistics.component';

@Component({
  selector: 'app-api-key-form',
  templateUrl: './api-key-form.component.html',
  styleUrls: ['./api-key-form.component.css']
})
export class ApiKeyFormComponent implements OnInit {

  form: FormGroup;
  msc: MainStatisticsComponent;
  x = 0;

  constructor(public fb: FormBuilder, private statsService: StatsService) {
    this.form = fb.group({
      apiKey: ['']
    });
    this.msc = new MainStatisticsComponent();
  }

  ngOnInit(): void {
  }

  getStats(): void {
    console.log("Get stats");
    this.x += 1;
    this.statsService.getStats("someKay");
    this.msc.doSomething();
  }

}
