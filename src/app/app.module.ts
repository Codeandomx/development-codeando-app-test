import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { InitRoutingModule } from './modules/init/init-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './services/auth.service';
import { AuthComponent } from './components/auth/auth.component';

import { MaterializeModule } from 'angular2-materialize';
import { NavComponent } from './components/nav/nav.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatAddComponent } from './components/chat-add/chat-add.component';
import { ChatService } from './services/chat.service';

import { NgPipesModule } from 'ngx-pipes';

const firebase = {
  apiKey: "AIzaSyAY2qT2BCYOkIiJ0WbRMWBNB-iV2eEVdJE",
  authDomain: "codeando-ccea8.firebaseapp.com",
  databaseURL: "https://codeando-ccea8.firebaseio.com",
  projectId: "codeando-ccea8",
  storageBucket: "codeando-ccea8.appspot.com",
  messagingSenderId: "293307513377"
}

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    NavComponent,
    ChatComponent,
    ChatAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    AngularFireModule.initializeApp(firebase, 'codeando'),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
    NgPipesModule,
    InitRoutingModule,
    AppRoutingModule
  ],
  providers: [AuthService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
