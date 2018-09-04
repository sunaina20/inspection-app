import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntitlementsPage } from './entitlements';

@NgModule({
  declarations: [
    EntitlementsPage,
  ],
  imports: [
    IonicPageModule.forChild(EntitlementsPage),
  ],
})
export class EntitlementsPageModule {}
