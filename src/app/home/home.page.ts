import { Component, inject } from '@angular/core';
import { AlertController, NavController, ViewDidEnter, ViewWillEnter } from '@ionic/angular';
import { LoginService } from '../login.service';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // <----------------------modifica para firestore--->



interface UserData {
  nombre: string;
  usuario: string;
  tipoUsuario: string;
  pass: string;
}

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



  constructor(
  ) {}

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
      const userData = userSnapshot.docs[0].data() as UserData;
      if (userData.tipoUsuario === 'conductor') {
        this.navController.navigateForward('/conductor'); // <----------------------modificacion para derivar segun tipoUsuario--->
      } else if (userData.tipoUsuario === 'pasajero') {
        this.navController.navigateForward('/pasajero'); // <----------------------modificacion para derivar segun tipoUsuario--->
      }
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
