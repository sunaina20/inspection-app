import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, Nav, ToastController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  database: any = null;
  items: any[];
  backButtonPressedOnceToExit: any;
  login: any = {}
  login_form: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public platform: Platform, public nav: Nav, private toastCtrl: ToastController) {
    this.login_form = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });

    this.database = new SQLite();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signUp() {
    this.navCtrl.setRoot(SignupPage)
  }

  forgetPassword() {
    // this.navCtrl.push(ForgetPasswordPage)
  }

  /* Navigate to Home page on successful login */
  loginSucc() {
    this.database.create({ name: "data.db", location: "default" }).then((db: SQLiteObject) => {
      db.executeSql("SELECT * FROM user_table WHERE email = " + this.login.email + "AND password = " + this.login.password, []).then((data) => {
        console.log(data);
        localStorage.setItem('userData', data);
        this.navCtrl.setRoot(HomePage)
      }, (e) => {
        // console.log("Errot: ", JSON.stringify(e));
        let toast = this.toastCtrl.create({
          message: "User Doesn't exists",
          duration: 2000,
          position: 'bottom'
        });
     
        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });
     
        toast.present();
      });

    }, (error) => {
      console.log("ERROR: ", error);
    });
    // this.navCtrl.setRoot(BottomTabsPage)

  }

}
