import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,ToastController } from 'ionic-angular';
import {HomePage} from '../home/home';
/**
 * Generated class for the AlertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alert',
  templateUrl: 'alert.html',
})
export class AlertPage {

  values1:string;
  values2:string;
  getValues:string;
  constructor(public toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.values1=navParams.get('param1');
    this.values2=navParams.get('param2');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlertPage');
  }
  viewCtrl(){
    this.navCtrl.setRoot(HomePage); 
  }
  
  doPrompt() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: this.values1,
          placeholder: this.values1
        },
      ],
      buttons: [
        {
          text: this.values2,
          handler: data => {
            let toast = this.toastCtrl.create({
              message: this.values2,
              duration: 2000,
            });
            toast.present(toast);
          }
        },
        {
          text: 'Save',
          handler: data => {
            let toast = this.toastCtrl.create({
              message: 'You saved',
              duration: 2000,
            });
            toast.present(toast);
          }
        }
      ]
    });
    prompt.present();
}

}
