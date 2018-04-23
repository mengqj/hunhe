import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MsgcontentPage } from './msgcontent';

@NgModule({
  declarations: [
    MsgcontentPage,
  ],
  imports: [
    IonicPageModule.forChild(MsgcontentPage),
  ],
})
export class MsgcontentPageModule {}
