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
import { environment } from '../environments/environment';
import { AuthService } from './services/auth.service';
import { AuthComponent } from './components/auth/auth.component';

import { MaterializeModule } from 'angular2-materialize';
import { NavComponent } from './components/nav/nav.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatAddComponent } from './components/chat-add/chat-add.component';
import { ChatService } from './services/chat.service';

import { NgPipesModule } from 'ngx-pipes';

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
    AngularFireModule.initializeApp(environment.firebase, 'codeando'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgPipesModule,
    InitRoutingModule,
    AppRoutingModule
  ],
  providers: [AuthService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
