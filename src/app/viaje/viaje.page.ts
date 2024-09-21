import { Component, inject, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit {
  navController = inject(NavController);


  origen:string= '';
  destino:string='';

  // viaje = {
  //   origen: '',
  //   destino: '',
    

  // };

   viajeListo : boolean= true;


  constructor() { }

  ngOnInit() {
      
  }

  async creacionViaje (){
    const newViaje = {
      origen:this.origen,
      destino:this.destino
      
    }
    // console.log('Detalle del viaje: ', this.viaje);
    // this.viajeListo = true; 
  }
  async volver(){
    this.navController.pop();
  }
}
