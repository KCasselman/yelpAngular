import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class KeyInterceptor implements HttpInterceptor {
    token: string;
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.token = 'VUlL-z-SDaqn3vY7so8kC0bKyIn_fG3v_kucmwBt6bhfFbbdR2-12MVM4jNVGZ2KoQ9m9Ewv9v8SlphfxJKdjLRXvO3KhucDDuoiKBLXJze9x6BFeabyQ9blTazrW3Yx'
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${this.token}`
        }
      });
      return next.handle(request);
    }
  }