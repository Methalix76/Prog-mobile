import { Component, inject, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UsersService } from '../users.service';
import { ContraseñaService } from '../contraseña.service';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {

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
