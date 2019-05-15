

import { Component, OnInit } from '@angular/core';

import { AlertService } from 'src/app/core/alert/alet.service';
import { Carro } from '../carro';
import {CarroService} from '../carro.service';

@Component({
  selector: 'app-carro-list',
  templateUrl: './carro-list.component.html'
})
export class CarroListComponent implements OnInit {
  // Declarações de variáveis
  carros: Carro[];

  constructor(private carroService: CarroService, private alertService: AlertService) {}

  ngOnInit() {
    // Busca todas as mantenedoras
    this.carroService.findAll().subscribe(carros => (this.carros = carros));
  }

  // Método para deleta uma mantenedora
  onDelete(id: number) {
    // Deleta mantenedora na API
    this.carroService.deteleById(id).subscribe(() => {
      // Remove a mantenedora da lista
      this.carros = this.carros.filter(carro => carro.id !== id);

      // Alerta com a mensagem de sucesso
      this.alertService.success('Carro excluída com sucesso!');
    });
  }
}
