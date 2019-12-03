import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CupomListComponent } from './cupom-list/cupom-list.component';
import { CupomFormComponent } from './cupom-form/cupom-form.component';

const routes: Routes = [
  { path: '', component: CupomListComponent },
  { path: 'novo', component: CupomFormComponent },
  { path: 'editar/:id', component: CupomFormComponent },
  { path: 'visualizar/:id', component: CupomFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CupomRouting { }
