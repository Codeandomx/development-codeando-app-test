import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { FroalaModel } from '../../models/froalaModel';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {
	public options : Object;
	public froalaModel = new FroalaModel();

  	constructor(
  		public auth : AuthService
  	) { }

  	ngOnInit() {
  		this.options = {
  			placeholder: "Ingrese su contenido",
		    charCounterCount: true,
		    toolbarButtons: ['bold', 'italic', 'underline', 'strikeThrough', 'emoticons', 'paragraphFormat','align', 'undo', 'redo', 'html','alert'],
		    toolbarButtonsXS: ['bold', 'italic', 'underline', 'strikeThrough', 'emoticons', 'paragraphFormat','align', 'undo', 'redo', 'html','alert'],
		    toolbarButtonsSM: ['bold', 'italic', 'underline', 'strikeThrough', 'emoticons', 'paragraphFormat','align', 'undo', 'redo', 'html','alert'],
		    toolbarButtonsMD: ['bold', 'italic', 'underline', 'strikeThrough', 'emoticons', 'paragraphFormat','align', 'undo', 'redo', 'html','alert'],
		    emoticonsStep: 4,
	      	emoticonsSet: [
		        { code: '1f600', desc: 'Grinning face' },
		        { code: '1f601', desc: 'Grinning face with smiling eyes' },
		        { code: '1f602', desc: 'Face with tears of joy' },
		        { code: '1f603', desc: 'Smiling face with open mouth' },
		        { code: '1f604', desc: 'Smiling face with open mouth and smiling eyes' },
		        { code: '1f605', desc: 'Smiling face with open mouth and cold sweat' },
		        { code: '1f606', desc: 'Smiling face with open mouth and tightly-closed eyes' },
		        { code: '1f607', desc: 'Smiling face with halo' }
	      	],
	      	// imageUploadURL: '/assets',
	  	};
  	}

  	onSubmit()
  	{
  		let data = this.froalaModel.content;
  		console.log(data);
  	}

}
