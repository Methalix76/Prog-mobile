import { Component, inject, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  navController = inject(NavController);
  loginSrv =   inject(UsersService);

  constructor() { }

   ngOnInit() {
  }
  

}
 