import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  exit() {
    this.navCtrl.pop();
  }

  correct(boolean) {
    if (boolean == 1) {
      alert("AWESOME")
    } else {
      alert("TRY AGAIN");
    }
  }

}
