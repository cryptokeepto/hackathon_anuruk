import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from "../home/home";
import { RangePage } from "../range/range";
import { StatPage } from "../stat/stat";
import { QrcodePage } from "../qrcode/qrcode";


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  private home;
  private range;
  private stat;
  private qrcode;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.home = HomePage;
    this.range = RangePage;
    this.stat = StatPage;
    this.qrcode = QrcodePage;
  }



}
