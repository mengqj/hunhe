import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {  TabsPage} from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { SearchpwdPage } from '../pages/searchpwd/searchpwd';
import { FindPage } from '../pages/find/find';
import {InfcontentPage } from '../pages/infcontent/infcontent';
import {ServedetailPage } from '../pages/servedetail/servedetail';
import {MsgcontentPage } from '../pages/msgcontent/msgcontent';
import {FubucontentPage } from '../pages/fubucontent/fubucontent';
import {SetPage } from '../pages/set/set';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any= FubucontentPage ;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
