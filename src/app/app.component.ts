import { Component } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import {initializeApp} from '@firebase/app'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

async ngOnInit(){
//verermos que no estemos en un celular
  if(!Capacitor.isNativePlatform()){

    const firebaseConfig = {
      apiKey: "AIzaSyDPG9puasY2EQWNzz-70pLRwWRkpaY5D5Q",
      authDomain: "testfirebasetellevo.firebaseapp.com",
      projectId: "testfirebasetellevo",
      storageBucket: "testfirebasetellevo.appspot.com",
      messagingSenderId: "155295787478",
      appId: "1:155295787478:web:bffb550aaebbe725cadc77"
    };

    initializeApp(firebaseConfig)    
}


}






}
