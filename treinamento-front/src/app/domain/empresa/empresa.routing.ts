import { EmpresaListComponent } from './empresa-list/empresa-list-component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpresaFormComponent } from './empresa-form/empresa-form.component';

const routes: Routes = [
  { path: '', component: EmpresaListComponent },
  { path: 'novo', component: EmpresaFormComponent },
  { path: 'editar/:id', component: EmpresaFormComponent },
  { path: 'visualizar/:id', component: EmpresaFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpresaRouting {}
