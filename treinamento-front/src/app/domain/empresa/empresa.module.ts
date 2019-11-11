import { EmpresaListComponent } from './empresa-list/empresa-list-component';
import { EmpresaRouting } from './empresa.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmpresaFormComponent } from './empresa-form/empresa-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [EmpresaFormComponent, EmpresaListComponent],
  imports: [CommonModule, ReactiveFormsModule, CoreModule, EmpresaRouting]
})
export class EmpresaModule {}
