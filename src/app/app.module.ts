import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { SigninPage } from '../pages/signin/signin';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GeneralInfoPage } from '../pages/forms/general-info/general-info';
import { StudentAttendancePage } from '../pages/forms/student-attendance/student-attendance';
import { StaffAttendancePage } from '../pages/forms/staff-attendance/staff-attendance';
import { MedicalIssuesPage } from '../pages/forms/medical-issues/medical-issues';
import { DietIssuesPage } from '../pages/forms/diet-issues/diet-issues';
import { InfraMaintenancePage } from '../pages/forms/infra-maintenance/infra-maintenance';
import { AcademicPage } from '../pages/forms/academic/academic';
import { EntitlementsPage } from '../pages/forms/entitlements/entitlements';
import { RegistersPage } from '../pages/forms/registers/registers';
import { GeneralCommentsPage } from '../pages/forms/general-comments/general-comments';
import { WorkProgressPage } from '../pages/forms/work-progress/work-progress';
import { PhotosUploadPage } from '../pages/forms/photos-upload/photos-upload';

@NgModule({
  declarations: [
    MyApp,
    SigninPage,
    GeneralInfoPage,
    StudentAttendancePage,
    StaffAttendancePage,
    MedicalIssuesPage,
    DietIssuesPage,
    InfraMaintenancePage,
    AcademicPage,
    EntitlementsPage,
    RegistersPage,
    GeneralCommentsPage,
    WorkProgressPage,
    PhotosUploadPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SigninPage,
    GeneralInfoPage,
    StudentAttendancePage,
    StaffAttendancePage,
    MedicalIssuesPage,
    DietIssuesPage,
    InfraMaintenancePage,
    AcademicPage,
    EntitlementsPage,
    RegistersPage,
    GeneralCommentsPage,
    WorkProgressPage,
    PhotosUploadPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
