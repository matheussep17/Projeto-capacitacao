package br.edu.unievangelica.ftt.treinamento.domain.garagem;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GaragemRepository extends JpaRepository<Garagem, Long>{

}
