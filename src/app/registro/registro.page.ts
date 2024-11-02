import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from '@ionic/angular'; // HERE MODIFY: Importar LoadingController
import { LoginService } from '../login.service';
import { AngularFirestore } from '@angular/fire/compat/firestore'; // <----------------------modifica para firestore--->


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  nombre: string = '';
  usuario: string = '';
  pass: string = '';
  confirmPass: string = '';
  errorMessage: string = ''; // Variable para el mensaje de error
  tipoUsuario: string = ''; // Modificación 3: Añadir variable para tipo de usuario
  loading: boolean = false; // Modificación 4: Añadir variable para spinner
  mensaje: string = ''; // Modificación 5: Añadir variable para mensaje

  constructor(
    private navController: NavController, 
    private loginSrv: LoginService,
    private alertController: AlertController,
    private loadingController: LoadingController,
    private firestore: AngularFirestore // <----------------------modifica para firestore--->
  ) {}

  async registrar() {
    if (this.pass !== this.confirmPass) {
      this.errorMessage = 'Las contraseñas no coinciden'; 
      await this.showLoading(); 
      setTimeout(async () => { 
        await this.hideLoading(); 
        this.showAlert(this.errorMessage); 
      }, 1100);
      return; // Detener la ejecución si las contraseñas no coinciden
    }

    await this.showLoading();
    const registroExitoso = await this.loginSrv.registrar(this.usuario, this.pass);
    await this.hideLoading();

    if (registroExitoso) {
      // Guardar datos en Firestore
      this.firestore.collection('usuarios').add({
        nombre: this.nombre,
        usuario: this.usuario,
        tipoUsuario: this.tipoUsuario,
        pass: this.pass // Considera encriptar la contraseña antes de guardarla
      }).then(() => {
        this.showSuccessAlert();
        this.navController.navigateForward('/home');
      }).catch((error) => {
        this.errorMessage = 'Error al guardar en Firestore: ' + error.message;
        this.showAlert(this.errorMessage);
      });
    } else {
      this.errorMessage = 'Error al registrar, Valide su email'; 
      this.showAlert(this.errorMessage); 
    }
  }

  async showLoading() { // Método para mostrar el spinner
    const loading = await this.loadingController.create({
      message: 'Por favor, espera...',
      duration: 1100 // Duración del spinner
    });
    await loading.present();
  }

  async hideLoading() { //Método para ocultar el spinner
    await this.loadingController.dismiss();
  }

  async showAlert(message: string) { //Método para mostrar el popup de error
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async showSuccessAlert() { //Método para mostrar el popup de éxito
    const alert = await this.alertController.create({
      header: 'Registro',
      message: 'Exitoso!!!',
      buttons: ['OK']
    });

    await alert.present();
  }
}