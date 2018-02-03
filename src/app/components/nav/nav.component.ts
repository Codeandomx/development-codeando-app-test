import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

declare var $: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
	background: string = "../../../img/background.jpeg";

  	constructor(public auth: AuthService) { }

  	ngOnInit() {
  		// Inicializamos el componente sidenav
  		$(".button-collapse").sideNav();
  	}
}
