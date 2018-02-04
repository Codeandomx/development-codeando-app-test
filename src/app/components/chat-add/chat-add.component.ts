import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ChatService } from '../../services/chat.service';
import { ChatModel } from '../../models/chatModel';
import { toast } from 'angular2-materialize';

declare var $ : any;

@Component({
  selector: 'app-chat-add',
  templateUrl: './chat-add.component.html',
  styleUrls: ['./chat-add.component.css']
})
export class ChatAddComponent implements OnInit {
  chatModel = new ChatModel();
  chatsTemp: any = [];

  constructor(
  	public auth : AuthService,
  	private _chat : ChatService
  ) { }

  ngOnInit() {}

  onSubmit(f: NgForm) {
  	// Configuramos el modelo de datos
  	this.chatModel.uid = f.value.uid;
  	this.chatModel.name = f.value.name;
  	this.chatModel.img = f.value.img;
  	this.chatModel.date = this.getDate();
  	this.chatModel.time = new Date();
  	// Almacenamos
  	this.chatsTemp.unshift(this.chatModel.toObject());
  	this._chat.setChat(this.chatsTemp[0]);
  	// Limpiamos input
  	this.chatModel.msg = '';
  	toast('Su mensaje se envio con exito', 3000);
  }

  getDate() {
  	let d = new Date();
  	let date = d.getFullYear()+'/';
  	
  	// configuramos el mes
  	if((d.getMonth() + 1) < 10){ date += '0'+(d.getMonth() + 1)+'/'; }
  	else { date += (d.getMonth() + 1)+'/'; }
  	// configuramos el dia
  	if(d.getDate() < 10){ date += '0'+d.getDate()+' '; }
  	else { date += d.getDate()+' '; }
  	// Configuramos la hora
  	if(d.getHours() < 10){ date += '0'+d.getHours()+':'; }
  	else { date += d.getHours()+':'; }
  	// Configuramos los minutos
  	if(d.getMinutes() < 10){ date += '0'+d.getMinutes()+':'; }
  	else { date += d.getMinutes()+':'; }
  	// Configuramos los segundos
  	if(d.getSeconds() < 10){ date += '0'+d.getSeconds(); }
  	else { date += d.getSeconds(); }

  	return date;
  }
}