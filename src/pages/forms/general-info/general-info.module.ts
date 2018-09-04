import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeneralInfoPage } from './general-info';

@NgModule({
  declarations: [
    GeneralInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(GeneralInfoPage),
  ],
})
export class GeneralInfoPageModule {}
