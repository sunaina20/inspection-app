import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SignaturePadModule } from 'angular2-signaturepad';
import { HttpClientModule } from '@angular/common/http';
import { Keyboard } from '@ionic-native/keyboard';
import { HomePageModule } from '../pages/home/home.module';
import { LoginPageModule } from '../pages/login/login.module';
import { SignupPageModule } from '../pages/signup/signup.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { Device } from '@ionic-native/device';
import { Network } from '@ionic-native/network';
import { SQLite } from '@ionic-native/sqlite';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PdfViewerModule,
    IonicModule.forRoot(MyApp, {
      platforms: {
        ios: {
          scrollPadding: true,
          scrollAssist: true,
          autoFocusAssist: true,
          statusbarPadding: true
        },
        android: {
          scrollPadding: false,
          scrollAssist: true,
          autoFocusAssist: false
        }
      }
    }),
    HomePageModule,
    LoginPageModule,
    SignupPageModule,
    SignaturePadModule,
    HomePageModule,
    LoginPageModule,
    SignupPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Camera,
    Keyboard,
    Device,
    Network,
    SQLite
  ]
})
export class AppModule { }
