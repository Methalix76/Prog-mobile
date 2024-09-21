import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
  pass:string='';
  newcontra:string= '';
  oldcontra:string= '';
  cambiadacontra:boolean= false;
  constructor() { }

  ngOnInit() {
    this.pass='';
    this.newcontra= '';
    this.oldcontra='';
    
  }
  cambiarPw (){
    this.pass== '123'
    if(this.oldcontra === this.pass) {
      this.pass= this.newcontra;
      this.cambiadacontra= true;
      
    }else {
      alert('Contraseña actual incorrecta');
      this.cambiadacontra = false;
    }
    

  }
  
}
