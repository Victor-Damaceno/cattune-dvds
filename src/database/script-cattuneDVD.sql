
CREATE DATABASE cattuneDVD;

USE cattuneDVD;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(45),
	email VARCHAR(45),
	senha VARCHAR(45)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);


CREATE TABLE repertorios (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
descricao VARCHAR (200),
fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

CREATE TABLE musica (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
);

CREATE TABLE estilo (
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR (50),

);

/* esta tabela deve estar de acordo com o que está em INSERT de sua API do arduino - dat-acqu-ino */


SELECT * FROM usuario;


