
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


create table resul(
fkUsuario int,
resul int,
primary key (fkUsuario),
foreign key (fkUsuario) references usuario (idUsuario));

select * from resul;







 INSERT INTO lider (nome, fkUsuario) VALUES ("otoman", undefined);
 
 
 INSERT INTO lider (nome, fkUsuario) VALUES ("greek", undefined);
 
 
 update  usuario set fkemperador = 1 where idUsuario = 2;
 
 
 


select sum(resul) from resul 
	join usuario on idUsuario = fkUsuario
		where fkEmperador = 1;
        
         
select count(fkEmperador) from usuario where fkEmperador = 1;


select count(fkEmperador)as jogadores from usuario where fkEmperador = 1 ;
 create view VW_RESULTADO
 as select truncate(sum(resul) / (select count(fkEmperador)as jogadores from usuario where fkEmperador = 1),2) as total, lider.nome from resul 
	right join usuario on idUsuario = fkUsuario join lider on fkEmperador = idLider
		group by fkEmperador;
        
        select * from VW_RESULTADO;