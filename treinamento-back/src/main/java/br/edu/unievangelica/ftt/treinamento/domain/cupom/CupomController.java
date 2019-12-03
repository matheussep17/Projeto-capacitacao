package br.edu.unievangelica.ftt.treinamento.domain.cupom;

import br.edu.unievangelica.ftt.treinamento.core.controller.AbstractController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/cupom")
public class CupomController extends AbstractController<Cupom> {
}
