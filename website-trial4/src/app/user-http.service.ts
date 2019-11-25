import { Injectable } from '@angular/core';
import { SignupRequest } from './signup-request';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

  url: string = "http://localhost:8080/users/save";
  constructor(private http: HttpClient) { }

  public saveUser(req: SignupRequest): Observable<any> {
    return this.http.post(this.url, req);
  }
}
