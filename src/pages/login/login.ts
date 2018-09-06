import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { HomePage } from "../home/home";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private email: string = "";
  private password: string = "";


  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, private alertCtrl: AlertController) {

  }

  private alert(title: string, message: string) {
    const alert = this.alertCtrl.create({
      title: title,
      message: message,
      buttons: ["ok"]
    });
    alert.present();
  }

  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password)
      .then((success) => {
        localStorage.setItem("token", this.afAuth.auth.currentUser.email);
        this.navCtrl.setRoot(HomePage);
      })
      .catch((error) => {
        this.alert("Opps !!!", error.message);
      })

  }

  facebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => {
        this.afAuth.authState.subscribe(
          (user: firebase.User) => {
            localStorage.setItem("token", user.email);
            this.navCtrl.setRoot(HomePage);
          },
          (error) => {}
        )
      })
      .catch(error => console.log(error))
  }

}
