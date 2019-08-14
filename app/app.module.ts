import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

//Rebcca Interação

import {Login} from '../pages/login/login';


//modulo do firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

//importação do modulo que vai permitir que relizamos cadastro no banco pelo app
import {FormsModule} from '@angular/forms';

//Serviços/modulo pro banco funiocnar a auth
import {AngularFireAuthModule} from '@angular/fire/auth';


  // Your web app's Firebase configuration
  const  config = {
    apiKey: "AIzaSyA1wcnra0E8uMZVUatS5f3XFf7JZ7gkNTs",
    authDomain: "ecowdhelper.firebaseapp.com",
    databaseURL: "https://ecowdhelper.firebaseio.com",
    projectId: "ecowdhelper",
    storageBucket: "ecowdhelper.appspot.com",
    messagingSenderId: "600635077281",
    appId: "1:600635077281:web:0632e2a6fc14af3b"
  };




@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Login

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    //dar acesso as classes que vão manipular o fires store
    AngularFirestoreModule,
    FormsModule,
    //modulo de autenticação
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    Login
 
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
