import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';

import { environment } from '../../../environments/environment';
import { User } from '../models/models';

const USERS: User[] = [
  {
    name: 'Juan',
    email: 'juan@mail.com',
    password: '1234'
  },
  {
    name: 'Maria',
    email: 'maria@mail.com',
    password: '5678'
  }
];

@Injectable()
export class MockUsersInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.indexOf(`${environment.API_DOMAIN}/login`) === 0 && req.method === 'POST') {
      for (const user of USERS) {
        if (user.email === req.body.email && user.password === req.body.password) {
          const u = { ...user, password: '' };
          return of(new HttpResponse({ status: 200, body: { user: u } }));
        }
      }
      return throwError(new HttpErrorResponse({ status: 401, statusText: 'Unauthorized' }));
    }
    return next.handle(req);
  }

}
