import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {HomePage}from '../home/home';
/**
 * Generated class for the WebdataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-webdata',
  templateUrl: 'webdata.html',
})
export class WebdataPage {
  posts: any;
  constructor(public toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams,public http: Http) {

    this.http.get('https://www.reddit.com/r/gifs/new/.json').map(res => res.json()).subscribe(data => {
        this.posts = data.data.children;
    },err => {
      console.log("Oops!");
  });
  }

  getdetails(a:string){
    let toast = this.toastCtrl.create({
      message: 'clicked on '+a,
      duration: 2000,
    });
    toast.present(toast);
  }


  viewCtrl(){
    this.navCtrl.setRoot(HomePage); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WebdataPage');
  }

}
