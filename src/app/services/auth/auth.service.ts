import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedIn = false;

  constructor(private http: HttpClient) { }

  public login(email: string, password: string): Observable<any> {
    const url = `${environment.API_DOMAIN}/login`;
    const body = { email, password };
    return this.http.post(url, body);
  }

}
