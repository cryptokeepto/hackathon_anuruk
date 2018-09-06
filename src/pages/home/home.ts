import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Stepcounter } from '@ionic-native/stepcounter';


import { RewardPage } from "../reward/reward";
import { TicketsPage } from "../tickets/tickets";
import { InfoPage } from "../info/info";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public email: any;
  public dataA;

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth, private modalCtrl: ModalController, private stepcounter: Stepcounter) {
    this.getApi();
    this.afAuth.authState.subscribe(
      (user: firebase.User) => {
        this.email = user.email;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  reward() {
    this.navCtrl.push(RewardPage);
  }

  tickets() {
    this.navCtrl.push(TicketsPage);
  }

  getInfo(object) {
    console.log(object)
    const modal = this.modalCtrl.create(InfoPage);
    modal.present();
  }

  getApi() {
    fetch("https://api.data.go.th/search_virtuoso/api/dataset/query?dsname=vir_231&loadAll=1&type=json&limit=100&offset=0")
      .then((v) => v.json())
      .then(e => this.dataA = e.data)
  }
  
}
