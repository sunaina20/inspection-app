import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeneralCommentsPage } from './general-comments';

@NgModule({
  declarations: [
    GeneralCommentsPage,
  ],
  imports: [
    IonicPageModule.forChild(GeneralCommentsPage),
  ],
})
export class GeneralCommentsPageModule {}
