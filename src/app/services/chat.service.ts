import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { 
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument 
} from 'angularfire2/firestore';
import { ChatModel } from '../models/chatModel';
import { UserModel } from '../models/userModel';

@Injectable()
export class ChatService {
	chatsCollection: AngularFirestoreCollection<ChatModel>;
	chats: Observable<ChatModel[]>;
	chatDoc: AngularFirestoreDocument<ChatModel>;
	userDoc: AngularFirestoreDocument<UserModel>;

	constructor(public afs : AngularFirestore) {
	    this.chatsCollection = this.afs.collection('chats', ref => {
	    	// Limitamos la salida a solo los ultimos 30 items
	    	return ref.orderBy('date', 'desc').limit(30);
	    });
	    // Obtenemos cada uno de los documentos
	    this.chats = this.chatsCollection.snapshotChanges().map(changes => {
	      	return changes.map(_data => {
	      		// Obtenemos cada uno de los documentos
	        	const data = _data.payload.doc.data() as ChatModel;
	        	data.id = _data.payload.doc.id;
	        	// Obtenemos los datos de usuario
	        	this.userDoc = this.afs.doc(`users/${data.uid}`);
	        	const user = this.userDoc.valueChanges().subscribe(user => {
	        		// Los asignamos al documento chat
	        		data.name = user.displayName;
	        		data.img = user.photoURL;
	        	});
	        	
	        	return data;
	      	});
	    });
	}

  	getChats() {
    	return this.chats; 
  	}

  	setChat(chat: ChatModel) {
    	this.chatsCollection.add(chat);
  	}

  	deleteSite(chat: ChatModel) {
    	this.chatDoc = this.afs.doc(`chats/${chat.id}`);
    	this.chatDoc.delete();
  	}

  	updateSite(chat: ChatModel) {
    	this.chatDoc = this.afs.doc(`chats/${chat.id}`);
    	this.chatDoc.update(chat);
  	}
}