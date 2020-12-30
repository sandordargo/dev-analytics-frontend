import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpParams} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

const URL = 'https://dev-analytics-backend-j2s5k.ondigitalocean.app/';
// const URL = 'http://127.0.0.1:5000/';
@Injectable()
export class StatsService {


  constructor(private http: HttpClient) {

  }

  getStats(apiKey: string): Promise<string> {
    // TODO: try to use Observable in order to learn about it
    // rxJs
    return this.http.get<string>(`${URL}`, {params: {apiKey: `${apiKey}`}}).toPromise();
  }

}
