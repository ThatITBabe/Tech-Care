import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private apiUrl = 'https://fedskillstest.coalitiontechnologies.workers.dev';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa('coalition' + ':' + 'skills-test')
    });

    return this.http.get(this.apiUrl, { headers }).pipe(
      map((res: any) => res),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Unknown error!';
        if (error.error instanceof ErrorEvent) {
          // Client-side errors
          errorMessage = `Client-side error: ${error.error.message}`;
        } else {
          // Server-side errors
          errorMessage = `Server-side error: ${error.status} ${error.statusText}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      })
    );
  }
}
