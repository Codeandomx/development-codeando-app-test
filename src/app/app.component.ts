import { Component,OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

declare var $ : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	ngOnInit() {
		// Inicializamos los tooltip
		$('.tooltipped').tooltip({delay: 50});
	}
}
