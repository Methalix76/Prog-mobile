import { Component } from '@angular/core';
import { ViewDidLeave } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  titulo:string = 'Te LLevo';

  constructor() {}

}
