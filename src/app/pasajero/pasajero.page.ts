import { Component, inject, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage implements OnInit {

  usuario:string = '';
  pass:string= '';
  nombre:string= 'registrarse'

  navController = inject(NavController);
  loginSrv =   inject(UsersService);
  constructor() { }


  ngOnInit(): void {
    this.usuario = '';
    this.pass = '';
  }

  ingresar (){
    if(this.usuario == 'a' && this.pass == 'a'){
      this.loginSrv.nombreUsuario = this.usuario;
      this.navController.navigateForward('/perfilpsjero');

    }else{
      alert('No autorizado');
    }
  }
}
