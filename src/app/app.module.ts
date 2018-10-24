import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AlertPage } from '../pages/alert/alert';
import { ToastPage } from '../pages/toast/toast';
import {FormPage} from '../pages/form/form';
import {WebdataPage} from '../pages/webdata/webdata';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlertPage,
    ToastPage,
    FormPage,
    WebdataPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AlertPage,
    ToastPage,
    FormPage,
    WebdataPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
