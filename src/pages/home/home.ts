import { Component } from '@angular/core';
import { NavController,Platform, ActionSheetController,App } from 'ionic-angular';
import {AlertPage} from '../alert/alert';
import {ToastPage} from '../toast/toast';
import {FormPage} from '../form/form';
import {WebdataPage} from '../webdata/webdata';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public platform: Platform,
    public actionsheetCtrl: ActionSheetController,
    public navController: NavController,private appCtrl: App) {
      this.navController = navController
    }
    
    openAlert(){
      //this.navController.push('WebdataPage',{id:4});
      //this.appCtrl.getRootNav().setRoot(AlertPage);
      this.navController.push(AlertPage, {param1:'Enter your values', param2:'Denial'});
   }
   openForm(){
    this.navController.push(FormPage,{param1:'Enter your values', param2:'Denial'});
   }
   toast(){
    this.navController.push(ToastPage,{param1:'Enter your values', param2:'Denial'});
    window.localStorage.setItem("ToastPage",JSON.stringify("DataYouWantInOtherComponent"));
   }

   openWebData(){
    this.navController.push(WebdataPage,{param1:'Enter your values', param2:'Denial'});
   }
   
  openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Albums',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Play',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}