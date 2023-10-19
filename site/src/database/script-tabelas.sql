
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

create table lider (
idLider int primary key auto_increment,
nome varchar(45));

insert into lider(nome) value
('napoleao'),
('alexandre'),
('quin'),
('mehemed2'),
('augusto');

create table resul(
fkUsuario int,
resul int,
primary key (fkUsuario),
foreign key (fkUsuario) references usuario (idUsuario));

create table vitoria(
p1 int,
p2 int);

-- aqui a view é criada Este código SQL cria uma view chamada VW_RESULTADO que calcula a média truncada de "resul" para jogadores pela fkEmperador 
--  juntamente com o nome do líder correspondente. para selecionar 
 create view VW_RESULTADO
 as select truncate(sum(resul) / (select count(fkEmperador)as jogadores from usuario where fkEmperador = 1),2) as total, lider.nome from resul 
	right join usuario on idUsuario = fkUsuario join lider on fkEmperador = idLider
		group by fkEmperador;
        
        select * from VW_RESULTADO;
        
        -- aqui crio a view que calcula quantas vezes o p1 ganhou e quantas vezes o p2 ganhou para exibir em uma tela de gráficos--
        create view somaVitoria as
select sum(p1) as somaP1, sum(p2) as somaP2
from vitoria;
select * from somaVitoria;
