import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  show="information";
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  doionrefresh(ionrefresher){
    setTimeout(()=>{
      ionrefresher.complete();
    },500);
  }
  items=[,,,];
  
  doInfinite(infiniteScroll){
    setTimeout(()=>{
    for(let i=0;i<30;i++)
    {
      this.items.push(this.items.length);
    }
    console.log('Async');
    infiniteScroll.complete();
  },500);
}
}
