import { Component, OnInit } from '@angular/core';
import { OrderByPipe } from 'ngx-pipes';
import { ChatService } from '../../services/chat.service';

declare var $ : any;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
  providers: [OrderByPipe]
})
export class ChatComponent implements OnInit {
  chats: any[];
  time: Date = new Date();

  constructor(
  	private _chat : ChatService,
  	public orderBy: OrderByPipe
  ) { }

  ngOnInit() {
  	this._chat.getChats().subscribe(( res ) => { this.chats = res });
  }

  close() {
  	$('#chat').css({
  		'transform': 'translateX(400px)'
  	});
  }
  open() {
  	$('#chat').css({
  		'transform': 'translateX(0)'
  	});	
  }
}
