import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';


@Injectable()
export class AuthService {
	// Datos del usuario
	private _user: Observable<firebase.User>;
	private _userDetails: firebase.User = null;

	constructor(
		private _fireBaseAuth: AngularFireAuth,
		private _router: Router
	) {
		// Obtenemos el estado del usuario
		this._user = _fireBaseAuth.authState;

		this._user.subscribe( (user) => {
          	if (user) {
            	this._userDetails = user;
          	} else {
            	this._userDetails = null;
          	}
        });
	}

	// Obtenemos al usuario
	getUserDetails() {
		return this._userDetails;
	}

	// autentificación con Twitter
	signInWithTwitter() {
		// Retornamos un popup para pedir autorizacion
      	return this._fireBaseAuth.auth.signInWithPopup(
        	new firebase.auth.TwitterAuthProvider()
      	)
    }

    // autentificación con Facebook
    signInWithFacebook() {
    	return this._fireBaseAuth.auth.signInWithPopup(
     		new firebase.auth.FacebookAuthProvider()
    	)
  	}

  	// autentificacion con Google
  	signInWithGoogle() {
    	return this._fireBaseAuth.auth.signInWithPopup(
      		new firebase.auth.GoogleAuthProvider()
    	)
  	}

  	// autentificacion con Github
  	signInWithGithub() {
    	return this._fireBaseAuth.auth.signInWithPopup(
      		new firebase.auth.GithubAuthProvider()
    	)
  	}

    // Verificamos si estamos logueados
  	isLoggedIn() {
  		if (this._userDetails == null ) {
      		return false;
    	} else {
      		return true;
    	}
  	}

  	// Logout
  	logout() {
    	this._fireBaseAuth.auth.signOut()
    	.then( res => {
    		this._userDetails = null;
    	});
  	}
}
