import { Component, Inject, inject, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  navController = inject(NavController);
  nombre: string ='login';
  constructor() { }

  ngOnInit() {
  }

  


  
}
