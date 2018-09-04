import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DietIssuesPage } from './diet-issues';

@NgModule({
  declarations: [
    DietIssuesPage,
  ],
  imports: [
    IonicPageModule.forChild(DietIssuesPage),
  ],
})
export class DietIssuesPageModule {}
