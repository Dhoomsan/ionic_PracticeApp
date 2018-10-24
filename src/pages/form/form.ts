import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import {HomePage} from '../home/home';
/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }
  viewCtrl(){
    this.gotoHome();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPage');
  }

  Username: string = "";
  password: string = "";
  submit(){
    if(this.Username.length!=0 && this.password.length!=0){
      let toast = this.toastCtrl.create({
        message: "User Name :"+ this.Username+" , \n Password :"+this.password,
        duration: 2000,
      });
      toast.present(toast); 
      // setTimeout(function () {
      // }, 2000);

      this.gotoHome();
    }
    else{
      let toast = this.toastCtrl.create({
        message: 'All field are  required !',
        duration: 2000,
      });
      toast.present(toast);
    }
   
  }
  gotoHome(){
    this.navCtrl.setRoot(HomePage); 
  }
}