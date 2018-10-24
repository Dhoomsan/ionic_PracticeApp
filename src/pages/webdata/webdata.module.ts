import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WebdataPage } from './webdata';

@NgModule({
  declarations: [
    WebdataPage,
  ],
  imports: [
    IonicPageModule.forChild(WebdataPage),
  ],
})
export class WebdataPageModule {}
