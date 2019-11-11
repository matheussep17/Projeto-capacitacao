import { Empresa } from '../empresa';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Validation from 'src/app/core/util/validation';
import { Pais } from '../../pais/pais';
import { PaisService } from '../../pais/pais.service';
import { AlertService } from 'src/app/core/alert/alet.service';
import { EmpresaService } from '../empresa.service';

@Component({
  selector: 'app-empresa-form',
  templateUrl: './empresa-form.component.html'
})
export class EmpresaFormComponent implements OnInit {
  // Declarações de variáveis
  empresa: Empresa;
  paises: Pais[];
  empresaForm: FormGroup;
  titulo: string;

  constructor(
    private empresaService: EmpresaService,
    private paisService: PaisService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute,
    private builder: FormBuilder
  ) {}

  ngOnInit() {
    // Instancia uma nova empresa
    this.empresa = new Empresa();

    // Obtem ID da empresa pela URL
    this.empresa.id = this.route.snapshot.params['id'];

    // Define título da página
    this.titulo = this.empresa.id ? 'Editar' : 'Cadastrar';

    // Reactive forms
    this.empresaForm = this.builder.group(
      {
        id: [],
        nome: ['', [Validators.required]],
        endereco: this.builder.group({
          id: [],
          logradouro: ['', Validators.required],
          complemento: ['', Validators.required],
          bairro: ['', Validators.required],
          cidade: ['', Validators.required],
          estado: ['', Validators.required],
          pais: ['', Validators.required]
        })
      },
      {}
    );

    // Busca a empresa caso seja o formulário de editar ou visualizar
    if (this.empresa.id) {
      this.empresaService
        .findById(this.empresa.id)
        .subscribe(empresa => this.empresaForm.patchValue(empresa));
    }

    // Verifica se o formulário seja visualizar
    if (this.route.snapshot.url[0].path == 'visualizar') {
      // Desabilita o formulário
      this.empresaForm.disable();

      // Alterar o título da página
      this.titulo = 'Visualizar';
    }

    // Busca lista de paises
    this.paisService.findAll().subscribe(paises => (this.paises = paises));
  }

  // Marca a opção selecionada no select
  compareFn(c1, c2): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }

  // Método para salvar a empresa
  onSave(empresa: Empresa) {
    // Verifica se o formulário esta inválido
    if (this.empresaForm.invalid) {
      // Valida todos os campos do formulário
      Validation.allFormFields(this.empresaForm);

      // Alerta com a mensagem de erro
      this.alertService.error('Por favor, preencha os campos obrigatórios!');
    } else {
      // Se o formulário estiver válido

      // Salva os dados na API
      this.empresaService.save(empresa).subscribe(empresa => {
        // Alerta com a mensagem de sucesso
        this.alertService.success('Empresa salva com sucesso!');

        // Redireciona para lista de garagens
        this.router.navigate(['/empresa']);
      });
    }
  }
}
