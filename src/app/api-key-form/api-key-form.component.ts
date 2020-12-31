import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {StatsService} from '../stats.service';

@Component({
  selector: 'app-api-key-form',
  templateUrl: './api-key-form.component.html',
  styleUrls: ['./api-key-form.component.css']
})
export class ApiKeyFormComponent implements OnInit {

  form: FormGroup;
  jsonContent: any;
  loaded = false;

  constructor(public fb: FormBuilder, private statsService: StatsService) {
    this.form = fb.group({
      apiKey: ['']
    });
  }

  ngOnInit(): void {
  }

  getStats(): void {
    const key = this.form.get('apiKey')?.value;
    const reply = this.statsService.getStats(key);

    reply.then(value => {
      this.jsonContent = value;
      this.loaded = true;
    });

  }

}
