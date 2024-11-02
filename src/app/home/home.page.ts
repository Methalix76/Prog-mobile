import { Component, inject } from '@angular/core';
import { AlertController, NavController, ViewDidEnter, ViewWillEnter } from '@ionic/angular';
import { LoginService } from '../login.service';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // <----------------------modifica para firestore--->


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
  firestore = inject(AngularFirestore); // <----------------------modifica para firestore--->
  alertController = inject(AlertController); // <----------------------modifica para firestore--->



  constructor() {
  }

  ionViewWillEnter(): void {
  }

  async ionViewDidEnter() {
    this.usuario = '';
    this.pass = '';
  }

  async ingresar() {
    // <----------------------modifica boton ingresar--->
    const userRef = this.firestore.collection('usuarios', ref => ref.where('usuario', '==', this.usuario).where('pass', '==', this.pass));
    const userSnapshot = await userRef.get().toPromise();

    if (userSnapshot && userSnapshot.docs.length > 0) {
      this.navController.navigateForward('/');
    } else {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Usuario o contraseña incorrectos',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
  



  irARegistro() {
    this.navController.navigateForward('/registro');
  }


  
}
