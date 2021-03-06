package br.edu.unievangelica.ftt.treinamento.domain.carro;


import javax.persistence.*;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import br.edu.unievangelica.ftt.treinamento.core.entity.AbstractEntity;
import br.edu.unievangelica.ftt.treinamento.domain.garagem.Garagem;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "carro")
@Getter @Setter
public class Carro extends AbstractEntity {

    private static final long serialVersionUID = 1L;

    @NotEmpty @NotBlank
    @Size(max = 80)
    @Column(name = "fabricante", nullable = false)
    private String fabricante;

    @NotEmpty @NotBlank
    @Size(max = 80)
    @Column(name = "modelo", nullable = false)
    private String modelo;

    @NotEmpty @NotBlank
    @Size(max = 80)
    @Column(name = "versao", nullable = false)
    private String versao;

    @NotEmpty @NotBlank
    @Size(max = 80)
    @Column(name = "descricao", nullable = false)
    private String descricao;

    @NotEmpty @NotBlank
    @Size(max = 80)
    @Column(name = "cor", nullable = false)
    private String cor;

    @NotEmpty @NotBlank
    @Size(max = 80)
    @Column(name = "valor", nullable = false)
    private String valor;

    @Valid
    @ManyToOne (fetch = FetchType.EAGER)
    @JoinColumn(name = "garagem_id", referencedColumnName = "id")
    private Garagem garagem;


}
