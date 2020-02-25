import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable, of, throwError } from 'rxjs';

const USERS: { email: string, password: string }[] = [
  {
    email: 'juan@mail.com',
    password: '1234'
  },
  {
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
          return of(new HttpResponse({ status: 200, body: {} }));
        }
      }
      return throwError(new HttpErrorResponse({ status: 401, statusText: 'Unauthorized' }));
    }
    return next.handle(req);
  }

}
