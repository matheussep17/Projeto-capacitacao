import { EmpresaService } from '../empresa.service';
import { Empresa } from '../empresa';
import { Component, OnInit } from '@angular/core';

import { AlertService } from 'src/app/core/alert/alet.service';

@Component({
  selector: 'app-empresa-list',
  templateUrl: './empresa-list.component.html'
})
export class EmpresaListComponent implements OnInit {
  // Declarações de variáveis
  empresas: Empresa[];

  constructor(
    private empresaService: EmpresaService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    // Busca todas as garagens
    this.empresaService
      .findAll()
      .subscribe(empresas => (this.empresas = empresas));
  }

  // Método para deleta uma empresa
  onDelete(id: number) {
    // Deleta empresa na API
    this.empresaService.deteleById(id).subscribe(() => {
      // Remove a empresa da lista
      this.empresas = this.empresas.filter(empresa => empresa.id !== id);

      // Alerta com a mensagem de sucesso
      this.alertService.success('Empresa excluída com sucesso!');
    });
  }
}
