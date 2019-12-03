package br.edu.unievangelica.ftt.treinamento.domain.cupom;

import br.edu.unievangelica.ftt.treinamento.core.entity.AbstractEntity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
@Table(name = "cupom")
@Getter
@Setter
public class Cupom extends AbstractEntity {

    private static final long serialVersionUID = 1L;

    @NotEmpty
    @NotBlank
    @Size(max = 30)
    @Column(name = "nome", nullable = false)
    private String nome;

}