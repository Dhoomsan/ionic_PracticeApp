import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import {HomePage} from '../home/home';
/**
 * Generated class for the ToastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toast',
  templateUrl: 'toast.html',
})
export class ToastPage {
  data:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController) {
    let ReceivedData = window.localStorage.getItem("ToastPage"); 
    this.data= JSON.parse(ReceivedData );
  }
  
  viewCtrl(){
    this.navCtrl.setRoot(HomePage); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToastPage');
  }

  showToast(position: string) {
    let toast = this.toastCtrl.create({
      message: this.data,
      duration: 2000,
      position: position
    });
    toast.present(toast);
  }

  showToastWithCloseButton() {
    const toast = this.toastCtrl.create({
      message: 'Your files were successfully saved',
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

  showLongToast() {
    let toast = this.toastCtrl.create({
      message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea voluptatibus quibusdam eum nihil optio, ullam accusamus magni, nobis suscipit reprehenderit, sequi quam amet impedit. Accusamus dolorem voluptates laborum dolor obcaecati.',
      duration: 2000,
    });
    toast.present();
  }
}
