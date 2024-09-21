import { Injectable } from '@angular/core';
import { Pique } from 'src/_models/viajecito';

@Injectable({
  providedIn: 'root'
})
export class PiquesService {

  lista:Pique[]= []
  constructor() { }

  cargarViajes(){
    this.lista= [
    {
      origen: 'maipu',
      destino :'Caracas'
    },
    ]
  }
}
