import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthSafeService implements CanActivate
{

  constructor(
  	private auth : AngularFireAuth,
  	private router : Router
  ) { }

  canActivate(): Observable<boolean> {
    // Observamos el status del login
    return Observable.from(this.auth.authState)
      .take(1)
      .map(state => !!state)
      .do(authenticated => {
        // Verificamos si esta autenticado el usuario
        if(!authenticated){
          // Si no lo esta lo regresamos a la pagina principal
          this.router.navigate(['/']);
        }
      })
    }

}
