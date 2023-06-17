
drop database ruler;
create database ruler;
use ruler;

create table usuario (
idUsuario int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45),
fkEmperador int,
constraint fkEmperador foreign key (fkEmperador)
references lider(idLider));

select * from usuario;
select * from lider;

insert into lider(nome) value
('napoleao'),
('alexandre'),
('quin'),
('mehemed2'),
('augusto');

create table lider (
idLider int primary key auto_increment,
nome varchar(45));
insert into usuario (nome,fkEmperador) value
('sim', 1),
('a', 2),
('n', 1),
('iga', 2);



 INSERT INTO lider (nome, fkUsuario) VALUES ("otoman", undefined);
 
 
 INSERT INTO lider (nome, fkUsuario) VALUES ("greek", undefined);
 
 
 update  usuario set fkemperador = 1 where idUsuario = 2;