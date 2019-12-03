import { EmpresaModule } from './domain/empresa/empresa.module';
import { AppRouting } from './app.routing';
import { DashboardModule } from './domain/dashboard/dashboard.module';
import { CarroModule } from './domain/carro/carro.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';
import { GaragemModule } from './domain/garagem/garagem.module';
import { DashboardComponent } from './domain/dashboard/dashboard.component';
import { CupomModule } from './domain/cupom/cupom.module';

@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [
    BrowserModule,
    AppRouting,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    CoreModule,
    GaragemModule,
    CarroModule,
    DashboardModule,
    EmpresaModule,
    CupomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
