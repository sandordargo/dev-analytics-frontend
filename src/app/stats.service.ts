import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const URL = 'https://dev-analytics-backend-j2s5k.ondigitalocean.app/';
// const URL = 'http://127.0.0.1:5000/';
@Injectable()
export class StatsService {


  constructor(private http: HttpClient) {

  }

  getStats(apiKey: string): Observable<any> {
    return this.http.get<string>(`${URL}`, {params: {apiKey: `${apiKey}`}});
  }

}
