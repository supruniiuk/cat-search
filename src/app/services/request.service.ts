import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  public error$: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) {}

  public get<T>(route: string): Observable<T> {
    return this.http.get<T>(this.createRoute(route), {
      headers: this.generateHeaders(),
    });
  }

  public create<T>(route: string, body: any): Observable<T> {
    return this.http.post<T>(this.createRoute(route), body, {
      headers: this.generateHeaders(),
    });
  }

  public update<T>(route: string, body: any): Observable<T> {
    return this.http.put<T>(this.createRoute(route), body, {
      headers: this.generateHeaders(),
    });
  }

  public delete<T>(route: string): Observable<T> {
    return this.http.delete<T>(this.createRoute(route), {
      headers: this.generateHeaders(),
    });
  }

  private createRoute = (route: string) => {
    return `${environment.apiUrl}/${route}`;
  };

  private generateHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
    });
  }
}
