import { Component, OnInit } from '@angular/core';
import { Cupom } from '../cupom';
import { CupomService } from '../cupom.service';
import { AlertService } from 'src/app/core/alert/alet.service';

@Component({
  selector: 'app-cupom-list',
  templateUrl: './cupom-list.component.html'
})
export class CupomListComponent implements OnInit {

  // Declarações de variáveis
  cupons: Cupom[];

  constructor(private cupomService: CupomService,
              private alertService: AlertService) { }

  ngOnInit() {

    // Busca todos os cupons
    this.cupomService.findAll()
      .subscribe(cupons => this.cupons = cupons);
  }

  // Método para deletar um cupom
  onDelete(id: number){

    // Deleta cupom na API
    this.cupomService.deleteById(id)
      .subscribe(() => {

        // Remove o pais da lista
        this.cupons = this.cupons
          .filter(cupom => cupom.id !== id);

        // Alerta com mensagem de sucesso
        this.alertService.success("Cupom excluído com sucesso!");
      });
  }

}
