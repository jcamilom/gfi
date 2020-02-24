import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.indexOf(environment.API_DOMAIN) === 0) {
      const clonedReq = req.clone({
        params: req.params.set('apikey', environment.API_KEY)
      });
      return next.handle(clonedReq);
    }
    return next.handle(req);
  }

}
