package br.edu.unievangelica.ftt.treinamento.domain.endereco;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonIgnore;

import br.edu.unievangelica.ftt.treinamento.core.entity.AbstractEntity;
import br.edu.unievangelica.ftt.treinamento.domain.garagem.Garagem;
import br.edu.unievangelica.ftt.treinamento.domain.pais.Pais;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "endereco")
@Getter @Setter
public class Endereco extends AbstractEntity {

	private static final long serialVersionUID = 1L;

	@NotEmpty
	@Size(max = 80)
	@Column(name = "logradouro", nullable = false)
	private String logradouro;

	@Size(max = 30)
	@Column(name = "complemento")
	private String complemento;

	@Size(max = 30)
	@Column(name = "bairro")
	private String bairro;

	@Size(max = 80)
	@Column(name = "cidade")
	private String cidade;

	@Size(max = 30)
	@Column(name = "estado")
	private String estado;
	
	@NotNull
	@ManyToOne
	@JoinColumn(name = "pais_id", referencedColumnName = "id")
	private Pais pais;
	
	@JsonIgnore
	@OneToOne(mappedBy = "endereco")
	private Garagem garagem;
	


}
