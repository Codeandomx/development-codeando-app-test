import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import {
  AngularFirestore,
  AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

interface User {
  uid: string;
  email: string;
  photoURL?: string;
  displayName?: string;
  favoriteColor?: string;
}

@Injectable()
export class AuthService {
	// Datos del usuario
	user: Observable<User>;

	constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router)
  {
    //// Get auth data, then get firestore user document || null
    this.user = this.afAuth.authState
      .switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
        } else {
          return Observable.of(null)
        }
      })
  }

	// autentificación con Twitter
	signInWithTwitter() {
		// Retornamos un popup para pedir autorizacion
    const provider = new firebase.auth.TwitterAuthProvider()
    return this.oAuthLogin(provider);
  }

  // autentificación con Facebook
  signInWithFacebook() {
   	const provider = new firebase.auth.FacebookAuthProvider();
    return this.oAuthLogin(provider);
	}

	// autentificacion con Google
	signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
  	return this.oAuthLogin(provider);
	}

	// autentificacion con Github
	signInWithGithub() {
    const provider = new firebase.auth.GithubAuthProvider();
  	return this.oAuthLogin(provider);
	}

  // Lanzamos el popup y obtenemos credenciales
  private oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then((credential) => {
        this.updateUserData(credential.user)
      })
  }

  // Obtenemos la información del usuario
  private updateUserData(user) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }
    return userRef.set(data)
  }

  // Logout
  logout() {
    this.afAuth.auth.signOut();
  }
}
