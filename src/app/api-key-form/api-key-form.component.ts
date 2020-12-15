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
  content: any;

  constructor(public fb: FormBuilder, private statsService: StatsService) {
    this.form = fb.group({
      apiKey: ['']
    });
    this.msc = new MainStatisticsComponent();
  }

  ngOnInit(): void {
  }

  getStats(): void {
    this.x += 1;
    const key = this.form.get('apiKey')?.value;
    console.log(key);
    const reply = this.statsService.getStats(key);
    reply.then(value => this.content = JSON.stringify(value));
  }

}
