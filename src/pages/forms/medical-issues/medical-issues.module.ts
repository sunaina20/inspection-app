import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicalIssuesPage } from './medical-issues';

@NgModule({
  declarations: [
    MedicalIssuesPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicalIssuesPage),
  ],
})
export class MedicalIssuesPageModule {}
