import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

declare var $: any;

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  	constructor(private _auth: AuthService) { }

  	ngOnInit() {
  	}

  	// Login con twitter
  	signInWithTwitter() {
  		this._auth.signInWithTwitter()
		.then((res) => {
			this.close();
		});
  	}

	// Login con Facebook
	signInWithFacebook() {
	  	this._auth.signInWithFacebook()
	  	.then((res) => { 
	    	this.close();
			// datos devueltos
			console.log(res);
	    })
	  	.catch((err) => console.log(err));
	}

	// Login con Google
	signInWithGoogle() {
	  	this._auth.signInWithGoogle()
	  	.then((res) => { 
	    	this.close();
	    });
	}

	// Login con Github
	signInWithGithub() {
	  	this._auth.signInWithGithub()
	  	.then((res) => { 
	    	this.close();
	    });
	}

	// Cerramos elementos visuales
	close() {
		// Aqui debemos cerrar el popup
		$('#modal1').modal('close');
		// Cerramos la barra lateral
		//$('.button-collapse').sideNav('hide');
	}
}
