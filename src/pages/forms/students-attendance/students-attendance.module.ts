import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentsAttendancePage } from './students-attendance';

@NgModule({
  declarations: [
    StudentsAttendancePage,
  ],
  imports: [
    IonicPageModule.forChild(StudentsAttendancePage),
  ],
})
export class StudentsAttendancePageModule {}
