import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthSafeService implements CanActivate
{

  constructor(
  	private auth : AuthService,
  	private router : Router
  ) { }

  canActivate() {
  	if(this.auth.user){
  		// Si estamos logueados accedemos
  		return true;
  	}

  	// Si no estamos logueados redireccionamos
  	return this.router.navigate(['/']);
  }

}
