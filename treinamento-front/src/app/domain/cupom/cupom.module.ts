import { CupomRouting } from './cupom.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CupomListComponent } from './cupom-list/cupom-list.component';
import { CupomFormComponent } from './cupom-form/cupom-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [
    CupomListComponent,
    CupomFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoreModule,
    CupomRouting
  ]
})
export class CupomModule { }
