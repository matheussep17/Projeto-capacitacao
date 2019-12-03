import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './domain/dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'dashboard',
    loadChildren: './domain/dashboard/dashboard.module#DashboardModule'
  },
  { path: 'pais', loadChildren: './domain/pais/pais.module#PaisModule' },
  {
    path: 'garagem',
    loadChildren: './domain/garagem/garagem.module#GaragemModule'
  },
  { path: 'carro', loadChildren: './domain/carro/carro.module#CarroModule' },
  {
    path: 'empresa',
    loadChildren: './domain/empresa/empresa.module#EmpresaModule'
  },

  {
    path: 'cupom',
    loadChildren: './domain/cupom/cupom.module#CupomModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting {}
