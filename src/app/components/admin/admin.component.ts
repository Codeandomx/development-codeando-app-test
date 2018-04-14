import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

declare var $ : any;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

	constructor(
		public auth : AuthService,
		private router : Router
	) { }

	ngOnInit() {
		// Ocultamos elementos de UI
		$('#navbar-main').hide(); // navbar
		$('.fixed-action-btn').hide(); // button chat
	}

	// metodo para abrir el sidebar
	openSideNav() {
		$('.button-collapse').sideNav('show');
	}
}
