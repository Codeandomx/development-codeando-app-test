import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $ : any;

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  	constructor(
  		private router : Router
  	) { }

  	ngOnInit() {
  	}

  	// metodo para salir del admiistrador
	exit() {
		// Mostramos elementos de UI
		$('#navbar-main').show(); // navbar
		$('.fixed-action-btn').show(); // button chat
		// redirigimos
		this.router.navigate(['/']);
	}

}
