import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


// 임시 토큰
function getToken() {
  return 'this is token';
}

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let request: HttpRequest<any>;

    /**
     * 실제 사용 시 Authorization 사용
     */

    // request = req.clone({
    //   setHeaders: {
    //     Authorization: `Bearer ${getToken()}`
    //   }
    // });


    /**
     * 예제를 위해 test 사용
     */
    request = req.clone({
      setHeaders: {
        test: `Bearer ${getToken()}`
      }
    });

    return next.handle(request).pipe(
      catchError(e => {
        /**
         * 여기서 Error 원하는 방식으로 에러를 처리하자
         */
        alert(e.error.error.message);
        return throwError(e);
      })
    )
  }
}