import { Component, inject } from '@angular/core';
import { NavController, ViewDidEnter, ViewDidLeave, ViewWillEnter } from '@ionic/angular';
import { LoginService } from '../login.service';
import { FirebaseAuthentication } from '@capacitor-firebase/authentication';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements ViewDidEnter,ViewWillEnter {

  usuario:string = '';
  pass:string = '';
  
  navController = inject(NavController);
  loginSrv = inject(LoginService);
  constructor() {
  }

  //ocurre cuando se va a entrar a esta vista, antes de la animación
  ionViewWillEnter(): void {
    
  }

  //se ejecuta cuando ya se entró a la vista, despues de las animaciones
  async ionViewDidEnter() {
    this.usuario = '';
    this.pass = '';
  }
  
  async ingresar(){
    
    await this.loginSrv.login(this.usuario,this.pass);
    this.navController.navigateForward('/bienvenida');
    console.log('Ingresando');
  }
}