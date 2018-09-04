import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { LoadingController, AlertController } from "ionic-angular";

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html'
})
export class SigninPage {

  constructor(
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {
  }

  onSignin(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: 'Signing you in...'
    });
    loading.present();
    // this.authService.signin(form.value.email, form.value.password)
    //   .then(data => {
        loading.dismiss();
      // })
      // .catch(error => {
      //   loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Signin Done!',
          message: 'this is msg',
          buttons: ['Ok']
        });
        alert.present();
      // });
  }
}
