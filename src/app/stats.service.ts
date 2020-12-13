import { Injectable } from '@angular/core';

@Injectable()
export class StatsService {
  constructor() {

  }

  getStats(apiKey: string): string {
  return `YOu are interested in ${apiKey}}`;
  }
}
