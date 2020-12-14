import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const URL = 'https://dev-analytics-backend-j2s5k.ondigitalocean.app/';

@Injectable()
export class StatsService {


  constructor(private http: HttpClient) {

  }

  getStats(apiKey: string): Promise<string> {
    return this.http.get<string>(`${URL}`).toPromise();
  }

}
