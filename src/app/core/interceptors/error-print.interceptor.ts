import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NotificationService } from '../notification.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class ErrorPrintInterceptor implements HttpInterceptor {
  constructor(private readonly notificationService: NotificationService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap({
        error: (response) => {
          const url = new URL(request.url);

          const errMessage = response.status === 401 || response.status === 403
            ? response.error.message
            : `Request to "${url.pathname}" failed. Check the console for the details`;

          this.notificationService.showError(errMessage, 0);
        },
      })
    );
  }
}
