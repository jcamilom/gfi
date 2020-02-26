import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { User } from '../../core/models/models';

interface LoginResponse {
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(email: string, password: string): Observable<LoginResponse> {
    const url = `${environment.API_DOMAIN}/login`;
    const body = { email, password };
    return this.http.post<LoginResponse>(url, body);
  }

}
