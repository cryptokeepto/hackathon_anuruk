import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { ShowPage } from "../show/show";


@IonicPage()
@Component({
  selector: 'page-qrcode',
  templateUrl: 'qrcode.html',
})
export class QrcodePage {


  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner, private modalCtrl: ModalController) {
  }


  scan() {
    this.barcodeScanner.scan()
      .then((value) => {
        this.modalCtrl.create(ShowPage, { "data": value.text }).present();
      })
      .catch(() => {
        console.log("scan fail");
      })
  }
}

