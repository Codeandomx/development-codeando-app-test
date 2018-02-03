import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {
	path: any = [];
	img: string = 'assets/angular.png';
	i: number = 0;

  constructor() { }

  ngOnInit() {
  	this.path = [
  		'assets/html.png',
  		'assets/css.png',
  		'assets/js.png',
  		'assets/jquery.png',
  		'assets/github.png',
  		'assets/java.png',
  		'assets/php.png',
  		'assets/angular.png'
  	]
  	setInterval(() => {
  		this.img = this.path[this.i];
  		if(this.i < (this.path.length - 1)){
  			this.i++;
  		} else {
  			this.i = 0;
  		}
  	}, 3000);
  }
}
