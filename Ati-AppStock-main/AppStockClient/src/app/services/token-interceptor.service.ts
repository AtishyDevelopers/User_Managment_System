import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { UserProfileComponent } from '../layout/user-profile/user-profile.component';
import { User } from '../models/user';
import { catchError, map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler):   Observable<HttpEvent<any>> {
    // All HTTP requests are going to go through this method
    
    const currentUser:User = JSON.parse(localStorage.getItem('currentuser') || '{}');        
    if (currentUser && currentUser?.token) {
        req = req.clone({
            setHeaders: { 
                Authorization: `Bearer ${currentUser.token}`
            }
        });
    }

    if (!req.headers.has('Content-Type')) {
      req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
    }

    return next.handle(req).pipe(
      map((event: HttpEvent<any>) =>{
        if (event instanceof HttpResponse) {
          //console.log('event--->>>', event);
      }
      return event;
      }),

      catchError((err: HttpErrorResponse) =>{        
        if(err.status == 401){
          console.log(err)
          alert("Session expired");          
          this.logout();
        }
        return throwError(err);          
      })
    );
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
