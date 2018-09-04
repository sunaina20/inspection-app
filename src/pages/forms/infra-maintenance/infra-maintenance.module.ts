import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InfraMaintenancePage } from './infra-maintenance';

@NgModule({
  declarations: [
    InfraMaintenancePage,
  ],
  imports: [
    IonicPageModule.forChild(InfraMaintenancePage),
  ],
})
export class InfraMaintenancePageModule {}
