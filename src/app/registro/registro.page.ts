import { Component, inject, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

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
      this.navController.navigateForward('/perfil');

    }else{
      alert('No autorizado');
    }
  }
}
