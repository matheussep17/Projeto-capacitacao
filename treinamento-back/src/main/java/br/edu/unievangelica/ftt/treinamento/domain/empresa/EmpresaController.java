package br.edu.unievangelica.ftt.treinamento.domain.empresa;

import br.edu.unievangelica.ftt.treinamento.core.controller.AbstractController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/empresa")
public class EmpresaController extends AbstractController <Empresa> {
}
