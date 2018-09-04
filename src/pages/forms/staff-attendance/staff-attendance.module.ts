import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StaffAttendancePage } from './staff-attendance';

@NgModule({
  declarations: [
    StaffAttendancePage,
  ],
  imports: [
    IonicPageModule.forChild(StaffAttendancePage),
  ],
})
export class StaffAttendancePageModule {}
