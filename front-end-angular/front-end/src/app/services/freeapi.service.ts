import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

//FILE TO MAKE API CALLS
@Injectable()
export class freeApiService {
  constructor(private httpclient: HttpClient) {}

  getJobs(): Observable<any> {
    return this.httpclient.get('http://localhost:4000/api/jobs');
  }

  //GET INDIVIDUAL JOB DATA
  getIndividualJobs(selectJobId: string): Observable<any> {
    const params1 = new HttpParams().set('', selectJobId);
    return this.httpclient.get('http://localhost:4000/api/jobs', {
      params: params1,
    });
  }
}
