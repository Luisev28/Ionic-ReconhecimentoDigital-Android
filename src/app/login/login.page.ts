import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @Input()isModal: boolean;

  constructor(private faio:FingerprintAIO,private router:Router,private modalCrtl:ModalController) { }

  ngOnInit() {
    console.log('i am modal:', this.isModal )
  }

  login(){
    this.faio.show({
      title: 'Biometric Authentication', // (Apenas Android) Login biométrico"
     subtitle: 'Coolest Plugin ever', // (Android apenas)  
     description: 'Please authenticate', // opcional 
     fallbackButtonTitle: 'Use Backup', // opcional  | Quando disableBackup é false, o padrão é "Use Pin".
     disableBackup:true,  // Quando disableBackup é true o padrão é "Cancel"
      // opcional  |  false
    }).then(() =>{
       if(this.isModal){
      this.modalCrtl.dismiss();
    }else{
    this.router.navigateByUrl('/home');
  }
})
   .catch((error:any) =>{
     console.log('err:',error);
   })
    }
}


