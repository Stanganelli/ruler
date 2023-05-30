create database ruler;
use ruler;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45)
);

select * from usuario;
select * from lider;

create table lider (
idLider int primary key auto_increment,
nome varchar(45),
fkUsuario int,
constraint fkUsuario foreign key (fkUsuario)
references usuario(idUsuario));
 INSERT INTO lider (nome, fkUsuario) VALUES ("otoman", undefined);
 
 
 INSERT INTO lider (nome, fkUsuario) VALUES ("greek", undefined)
 