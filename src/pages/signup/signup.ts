import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { LoginPage } from '../login/login';


@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  database: any = null;
  signup_form: FormGroup;
  signup: any = { email: '', password: '', firstname: '', lastname: '' }
  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App, private sqlite: SQLite) {
    this.signup_form = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(2), Validators.pattern(/^[a-zA-Z\s]+$/)]),
      lastname: new FormControl('', [Validators.required, Validators.maxLength(20), Validators.minLength(2), Validators.pattern(/^[a-zA-Z\s]+$/)]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z.-]+\.[a-z]{2,4}$/)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(8), Validators.pattern(/^[a-zA-Z0-9!@#$%^&*\d\-\_]+$/)])
    })

    this.database = new SQLite();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  /* Navigate back to Sign In Page */
  goBack() {
    this.navCtrl.setRoot(LoginPage);
  }


  /* Sign up functionality */
  signUp() {
    this.database.create({ name: "data.db", location: "default" }).then((db: SQLiteObject) => {
      db.executeSql("INSERT INTO user_table (email, password, firstname, lastname) VALUES (?, ?, ?, ?)", [this.signup.email, this.signup.password , this.signup.firstname , this.signup.lastname]).then((data) => {
        console.log(data)
        this.signup = {}
        this.navCtrl.setRoot(LoginPage);
      }, (error) => {
        console.log("ERROR: ", JSON.stringify(error.err));
      });

    }, (error) => {
      console.log("ERROR: ", error);
    });
  }
}
