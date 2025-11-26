
CREATE DATABASE cattuneDVD;

USE cattuneDVD;

CREATE TABLE estilo (
	id INT PRIMARY KEY AUTO_INCREMENT UNIQUE,
	nome VARCHAR (45)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
	email VARCHAR(45) UNIQUE,
	senha VARCHAR(45),
	estilo_id INT,
	FOREIGN KEY (estilo_id) REFERENCES estilo(id),
	nomeMusico VARCHAR(45),
	instrumento VARCHAR(45),
	tecnica VARCHAR(45),
	nivel INT,
	voz VARCHAR(45)
);

CREATE TABLE musica (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
descricao VARCHAR(120),
estilo VARCHAR (45),
link VARCHAR (200),
usuario_id INT,
FOREIGN KEY (usuario_id) REFERENCES usuario(id),
data_musica CURRENT_TIME
);


CREATE TABLE repertorio (
nome VARCHAR (50),
descricao VARCHAR(120),
musica_id INT,
usuario_id INT,
CONSTRAINT pkRepertorio PRIMARY KEY (musica_id,usuario_id),
CONSTRAINT fkMusica FOREIGN KEY (musica_id) REFERENCES musica(id),
CONSTRAINT fkUsuario FOREIGN KEY (usuario_id) REFERENCES usuario(id)
);


INSERT INTO estilo (nome) VALUES
('Pop'),
('Rock'),
('Hip-hop'),
('Rap'),
('Trap'),
('Kpop'),
('Samba'),
('Funk'),
('MPB'),
('Pagode');


/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */


