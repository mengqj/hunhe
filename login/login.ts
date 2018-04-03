import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';
import { Headers } from '@angular/http';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,public http:Http,public alertCtrl: AlertController) {

  }
  
  headers;
  username:string;
  pwd:string;

  request(){
   this. headers = new Headers( {'Content-Type':'application/x-www-form-urlencoded'} );
    this.http.post("http://datainfo.duapp.com/shopdata/userinfo.php",JSON.stringify({userID:this.username,password:this.pwd,status:'login'}), {headers:this.headers} ).subscribe(
      data=>{
         if(data.json()===0)
         {
          this.Alert2();
         }
         else if(data.json()===2)
         this.Alert();
         else{
           this.goHome();
         }
        },
      err=>{
          this.Alert3();
      } );
  }
    goHome(){
      this.navCtrl.push(HomePage,{name:'进入首页'});
    }
  Alert() {
    let alert = this.alertCtrl.create({
      title: '密码错误',
      subTitle: '登录超时，请稍后再试。',
      buttons: ['OK']
    });
    alert.present();
  }
  Alert2() {
    let alert = this.alertCtrl.create({
      title: '用户不存在',
      subTitle: '请注册登录',
      buttons: ['OK']
    });
    alert.present();
  }
  Alert3() {
    let alert = this.alertCtrl.create({
      title: '登录超时',
      subTitle: '登录超时，请稍后再试。',
      buttons: ['OK']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
