import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, App, Events, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { Device } from '@ionic-native/device';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;
    rootPage: any = LoginPage

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public device: Device, app: App, public events: Events, public alertCtrl: AlertController, private sqlite: SQLite) {
        platform.ready().then(() => {
            statusBar.styleDefault();
            splashScreen.hide();

            this.sqlite.create({
                name: "data.db",
                location: "default"
            }).then((db: SQLiteObject) => {
                db.executeSql("CREATE TABLE IF NOT EXISTS user_table (email VARCHAR(50) PRIMARY KRY, password VARCHAR(30), firstname VARCHAR(30), lastname VARCHAR(30))", []).then((data) => {
                    console.log("TABLE CREATED: ", data);
                }, (error) => {
                    console.error("Unable to execute sql", error);
                })
            }, (error) => {
                console.error("Unable to open database", error);
                // Add a comment to this line
            });
        });
    }
}
