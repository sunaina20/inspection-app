import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcademicsPage } from './academics';

@NgModule({
  declarations: [
    AcademicsPage,
  ],
  imports: [
    IonicPageModule.forChild(AcademicsPage),
  ],
})
export class AcademicsPageModule {}
