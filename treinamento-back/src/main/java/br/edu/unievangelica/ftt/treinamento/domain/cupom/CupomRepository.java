package br.edu.unievangelica.ftt.treinamento.domain.cupom;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CupomRepository extends JpaRepository<Cupom, Long> {

}
