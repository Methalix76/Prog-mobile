import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  
  // MTX falta completar el vinculo y paginas
  // {
  //   path: 'viajes',
  //   loadChildren: () => import('./viajes/viajes.module').then( m => m.ViajesPageModule)
  // },
  // {
  //   path: 'anadir',
  //   loadChildren: () => import('./anadir/anadir.module').then( m => m.AnadirPageModule)
  // },
  {
    path: 'pasajero',
    loadChildren: () => import('./pasajero/pasajero.module').then( m => m.PasajeroPageModule)
  },
  {
    path: 'conductor',
    loadChildren: () => import('./conductor/conductor.module').then( m => m.ConductorPageModule)
  },
  {
    path: 'perfilpsjero',
    loadChildren: () => import('./perfilpsjero/perfilpsjero.module').then( m => m.PerfilpsjeroPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./password/password.module').then( m => m.PasswordPageModule)
  },
  // {
  //   path: 'viaje',
  //   loadChildren: () => import('./viaje/viaje.module').then( m => m.ViajePageModule)
  // },
  // {
  //   path: 'listaviaje',
  //   loadChildren: () => import('./listaviaje/listaviaje.module').then( m => m.ListaviajePageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
