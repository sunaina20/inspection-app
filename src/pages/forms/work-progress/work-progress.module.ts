import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WorkProgressPage } from './work-progress';

@NgModule({
  declarations: [
    WorkProgressPage,
  ],
  imports: [
    IonicPageModule.forChild(WorkProgressPage),
  ],
})
export class WorkProgressPageModule {}
