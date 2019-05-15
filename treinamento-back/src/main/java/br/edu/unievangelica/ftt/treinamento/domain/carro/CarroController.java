package br.edu.unievangelica.ftt.treinamento.domain.carro;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.unievangelica.ftt.treinamento.core.controller.AbstractController;

@RestController
@RequestMapping("/api/carro")
public class CarroController extends AbstractController<Carro> {

}
