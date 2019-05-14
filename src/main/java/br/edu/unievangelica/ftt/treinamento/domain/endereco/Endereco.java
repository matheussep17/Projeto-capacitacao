package br.edu.unievangelica.ftt.treinamento.domain.endereco;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

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
	@Column(name = "logradouro", length = 80, nullable = false)
	private String logradouro;
	
	@Column(name = "complemento", length = 30)
	private String complemento;
	
	@Column(name = "bairro", length = 30)
	private String bairro;
	
	@Column(name = "cidade", length = 80)
	private String cidade;
	
	@Column(name = "estado", length = 30)
	private String estado;
	
	@NotNull
	@ManyToOne
	@JoinColumn(name = "pais_id", referencedColumnName = "id")
	private Pais pais;
	
	@JsonIgnore
	@OneToOne(mappedBy = "endereco")
	private Garagem garagem;
	


}
