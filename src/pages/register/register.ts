import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  private email: string = "";
  private password: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password)
      .then((value) => {
        console.log(value);
      })
      .catch((error) => {
        console.log(error);
      })
  }

}
