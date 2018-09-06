import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from "../pages/register/register";
import { LoginPage } from "../pages/login/login";
import { QrcodePage } from "../pages/qrcode/qrcode";
import { RangePage } from "../pages/range/range";
import { StatPage } from "../pages/stat/stat";
import { TabsPage } from "../pages/tabs/tabs";
import { TicketsPage } from "../pages/tickets/tickets";
import { RewardPage } from "../pages/reward/reward";
import { InfoPage } from "../pages/info/info";
import { PreviewPage } from "../pages/preview/preview";
import { ShowPage } from "../pages/show/show";


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Stepcounter } from '@ionic-native/stepcounter';

// Initialize Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyClpWIvkQxvQ57c6K0puj5YiVTtqQP7TP8",
  authDomain: "walk-4af62.firebaseapp.com",
  databaseURL: "https://walk-4af62.firebaseio.com",
  projectId: "walk-4af62",
  storageBucket: "walk-4af62.appspot.com",
  messagingSenderId: "963756152786"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage,
    QrcodePage,
    RangePage,
    StatPage,
    TabsPage,
    TicketsPage,
    RewardPage,
    InfoPage,
    PreviewPage,
    ShowPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    LoginPage,
    QrcodePage,
    RangePage,
    StatPage,
    TabsPage,
    TicketsPage,
    RewardPage,
    InfoPage,
    PreviewPage,
    ShowPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BarcodeScanner,
    Stepcounter
  ]
})
export class AppModule { }
