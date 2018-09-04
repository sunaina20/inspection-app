import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhotosUploadPage } from './photos-upload';

@NgModule({
  declarations: [
    PhotosUploadPage,
  ],
  imports: [
    IonicPageModule.forChild(PhotosUploadPage),
  ],
})
export class PhotosUploadPageModule {}
