import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilpsjeroPageRoutingModule } from './perfilpsjero-routing.module';

import { PerfilpsjeroPage } from './perfilpsjero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilpsjeroPageRoutingModule
  ],
  declarations: [PerfilpsjeroPage]
})
export class PerfilpsjeroPageModule {}
