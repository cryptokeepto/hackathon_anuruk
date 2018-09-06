import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireAuth } from 'angularfire2/auth';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from "../pages/login/login";
import { PreviewPage } from "../pages/preview/preview";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;
  pages: Array<{ title: string, component: any }>;
  displayName: any;
  email: any;
  photoURL: any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,private afAuth: AngularFireAuth) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Preview', component: PreviewPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      const token = localStorage.getItem("token");
      if (token) {
        this.rootPage = TabsPage;
        // facebook
        this.afAuth.authState.subscribe(
          (user: firebase.User) => {
            // todo
            this.displayName = user.displayName;
            this.email = user.email;
            this.photoURL = user.photoURL
          },
          (error) => {
            console.log(error);
          }
        )


      } else {
        this.rootPage = LoginPage;
      }
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.afAuth.auth.signOut();
    localStorage.removeItem("token");
    this.nav.setRoot(LoginPage);
  }

}


