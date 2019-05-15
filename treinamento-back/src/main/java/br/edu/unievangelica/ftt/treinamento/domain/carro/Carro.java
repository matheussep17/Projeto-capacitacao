package br.edu.unievangelica.ftt.treinamento.domain.carro;


import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.Valid;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import br.edu.unievangelica.ftt.treinamento.core.entity.AbstractEntity;
import br.edu.unievangelica.ftt.treinamento.domain.endereco.Endereco;
import br.edu.unievangelica.ftt.treinamento.domain.garagem.Garagem;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "carro")
@Getter @Setter
public class Carro extends AbstractEntity {

    private static final long serialVersionUID = 1L;

    @NotEmpty @NotBlank
    @Size(min = 3, max = 80)
    @Column(name = "fabricante", length = 80, nullable = false)
    private String fabricante;

    @NotEmpty @NotBlank
    @Size(min = 3, max = 80)
    @Column(name = "modelo", length = 80, nullable = false)
    private String modelo;

    @NotEmpty @NotBlank
    @Size(min = 3, max = 80)
    @Column(name = "versao", length = 80, nullable = false)
    private String versao;

    @NotEmpty @NotBlank
    @Size(min = 3, max = 80)
    @Column(name = "descricao", length = 80, nullable = false)
    private String descricao;

    @NotEmpty @NotBlank
    @Size(min = 3, max = 80)
    @Column(name = "cor", length = 80, nullable = false)
    private String cor;

    @NotEmpty @NotBlank
    @Size(min = 3, max = 80)
    @Column(name = "valor", length = 80, nullable = false)
    private String valor;

    @Valid
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "garagem_id", referencedColumnName = "id")
    private Garagem garagem;


}