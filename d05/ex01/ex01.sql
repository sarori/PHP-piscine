CREATE TABLE ft_table( 
  id bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  login varchar(11) NOT NULL default 'toto',
  group ENUM('staff', 'student', 'other'),
  creation_time datetime,  
  PRIMARY KEY (id)
);