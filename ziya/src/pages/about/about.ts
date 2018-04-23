import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FubucontentPage } from '../fubucontent/fubucontent';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  openModal(){
    this.navCtrl.push(FubucontentPage);
}
}
