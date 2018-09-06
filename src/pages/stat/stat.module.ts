import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatPage } from './stat';

@NgModule({
  declarations: [
    StatPage,
  ],
  imports: [
    IonicPageModule.forChild(StatPage),
  ],
})
export class StatPageModule {}
