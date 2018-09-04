import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
    user_info : any = {}
  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    this.user_info = localStorage.getItem('userData')
  }

  ionViewWillEnter() {
  }

}
