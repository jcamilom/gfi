import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs';

/**
 * Authorization interceptor. Used to inject the MOVIES_API_KEY for every request intended to reach the MOVIES_API_DOMAIN
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.indexOf(environment.MOVIES_API_DOMAIN) === 0) {
      const clonedReq = req.clone({
        params: req.params.set('apikey', environment.MOVIES_API_KEY)
      });
      return next.handle(clonedReq);
    }
    return next.handle(req);
  }

}
