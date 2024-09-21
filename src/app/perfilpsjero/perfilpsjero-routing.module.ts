import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilpsjeroPage } from './perfilpsjero.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilpsjeroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilpsjeroPageRoutingModule {}
