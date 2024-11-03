import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FirestoreService } from '../servicios/firestore.service';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {
  nombre: string = '';

  constructor(private navCtrl: NavController, private firestoreService: FirestoreService) {}

  ngOnInit() {
    this.firestoreService.getUserData().subscribe(userData => {
      if (userData) {
        this.nombre = userData.nombre;
        console.log('Nombre del usuario:', this.nombre); // -----------modif relacionada mostrar informacionen conductor  ---
      } else {
        console.log('No se encontraron datos del usuario'); // -----------modif relacionada mostrar informacionen conductor  ---
      }
    }, error => {
      console.error('Error al obtener datos del usuario:', error); // -----------modif relacionada mostrar informacionen conductor  ---
    });
  }

  goToProfile() {
    this.navCtrl.navigateForward('/perfil-c');
  }
}


