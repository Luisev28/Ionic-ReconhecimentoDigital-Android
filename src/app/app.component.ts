import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { ModalController, Platform } from '@ionic/angular';
import { LoginPage } from './login/login.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform:Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private modalCtrl: ModalController,
  ) {
    this.initializeApp();
  }

  initializeApp(){
    this.platform.ready().then(()=>{
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.platform.pause.subscribe(()=> {
        this.lockApp();
      });
    });
  }

  async lockApp(){
    const modal = await this.modalCtrl.create({
      component:LoginPage,
      backdropDismiss:false,
      cssClass:'login-modal',
      componentProps:{
        isModal:true
      }
    });
    modal.present();
 
 }
}

