import { Component, inject } from '@angular/core';
import { NavController, ViewDidEnter, ViewWillEnter } from '@ionic/angular';
import { LoginService } from '../login.service';

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

  ionViewWillEnter(): void {
  }

  async ionViewDidEnter() {
    this.usuario = '';
    this.pass = '';
  }

  async ingresar(){
        await this.loginSrv.login(this.usuario,this.pass);
    this.navController.navigateForward('/');
    // console.log('Ingresando');
  }
  irARegistro() {
    this.navController.navigateForward('/registro');
  }


  
}
