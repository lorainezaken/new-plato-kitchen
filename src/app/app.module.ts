import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ItemComponent } from './item/item.component';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import {environment} from '../environments/environment';
import {AngularFireModule} from 'angularfire2';
export const firebaseConfig = environment.firebaseConfig;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,AngularFireModule.initializeApp(firebaseConfig),AngularFireModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
