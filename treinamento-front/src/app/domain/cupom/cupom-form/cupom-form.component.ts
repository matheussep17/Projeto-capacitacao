import { Component, OnInit } from '@angular/core';
import { Cupom } from '../cupom';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CupomService } from '../cupom.service';
import { ActivatedRoute, Router } from '@angular/router';
import Validation from '../../../core/util/validation';
import { AlertService } from 'src/app/core/alert/alet.service';

@Component({
  selector: 'app-cupom-form',
  templateUrl: './cupom-form.component.html'
})
export class CupomFormComponent implements OnInit {

  // Declaração de variáveis
  cupom: Cupom;
  cupomForm: FormGroup;
  titulo: string;

  constructor(private cupomService: CupomService,
              private alertService: AlertService,
              private builder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

    // Instanciar um novo cupom
    this.cupom = new Cupom();

    // Obtem o ID do cupom pela URL
    this.cupom.id = this.route.snapshot.params['id'];

    // Define o título da página
    this.titulo = (this.cupom.id) ? 'Editar':'Cadastrar';

    // Reactive forms
    this.cupomForm = this.builder.group({
      id: [],
      nome: ['', Validators.required]
    },{});

    // Busca cupom caso seja o formulário de editar ou visualizar
    if(this.cupom.id){
      this.cupomService.findById(this.cupom.id)
        .subscribe(cupom => this.cupomForm.patchValue(cupom));
    }

    // Verifica se o formulário seja visualizar
    if(this.route.snapshot.url[0].path =='visualizar'){

      // Desabilita o formulário
      this.cupomForm.disable();

      // Alterar o título da página
      this.titulo = 'Visualizar';
    }
  }

  // Método para salvar cupom
  onSave(cupom: Cupom) {

    // Verificar se o formulário esta inválido
    if(this.cupomForm.invalid){

      // Valida todos os campos do formulário
      Validation.allFormFields(this.cupomForm);

      // Alerta com a mensagem de erro
      this.alertService.error("Por favor, preencha os campo obrigatórios!");

    } else { // Se o formulário estiver válido

      // Salva os dados na API
      this.cupomService.save(cupom)
      .subscribe(cupom => {

        // Alerta com a mensagem de sucesso
        this.alertService.success("Cumpom salvo com sucesso!");

        // Redireciona para lista de cupons
        this.router.navigate(['/cupom']);
      });
    }
  }

}
