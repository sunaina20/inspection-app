import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { SignaturePadModule } from 'angular2-signaturepad';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { Device } from '@ionic-native/device';
import { Network } from '@ionic-native/network';
import { SQLite } from '@ionic-native/sqlite';

import { MyApp } from './app.component';
import { HomePageModule } from '../pages/home/home.module';
import { LoginPageModule } from '../pages/login/login.module';
import { SignupPageModule } from '../pages/signup/signup.module';
import { GeneralInfoPageModule } from '../pages/forms/general-info/general-info.module';
import { StudentsAttendancePageModule } from '../pages/forms/students-attendance/students-attendance.module';
import { StaffAttendancePageModule } from '../pages/forms/staff-attendance/staff-attendance.module';
import { MedicalIssuesPageModule } from '../pages/forms/medical-issues/medical-issues.module';
import { DietIssuesPageModule } from '../pages/forms/diet-issues/diet-issues.module';
import { InfraMaintenancePageModule } from '../pages/forms/infra-maintenance/infra-maintenance.module';
import { AcademicsPageModule } from '../pages/forms/academics/academics.module';
import { EntitlementsPageModule } from '../pages/forms/entitlements/entitlements.module';
import { RegistersPageModule } from '../pages/forms/registers/registers.module';
import { GeneralCommentsPageModule } from '../pages/forms/general-comments/general-comments.module';
import { WorkProgressPageModule } from '../pages/forms/work-progress/work-progress.module';
import { PhotosUploadPageModule } from '../pages/forms/photos-upload/photos-upload.module';

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
    SignupPageModule,
    GeneralInfoPageModule,
    StudentsAttendancePageModule,
    StaffAttendancePageModule,
    MedicalIssuesPageModule,
    DietIssuesPageModule,
    InfraMaintenancePageModule,
    AcademicsPageModule,
    EntitlementsPageModule,
    RegistersPageModule,
    GeneralCommentsPageModule,
    WorkProgressPageModule,
    PhotosUploadPageModule
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
