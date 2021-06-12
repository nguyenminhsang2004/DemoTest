import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  apiUrl = 'http://localhost:8080/API/';

  constructor(private http: HttpClient) {}

  public submitCode(program: string, language: string): Observable<string> {
    let body = new HttpParams();
    body = body.set('program', program);
    body = body.set('language', language);
    return this.http
      .post(
        this.apiUrl + 'Home/compileCode',
        body,
        {
          responseType: 'text',
          headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded;charset:utf-8')
        }
      )
      .pipe(map((res: string) => res.slice(1,res.length - 1)));
  }
}
