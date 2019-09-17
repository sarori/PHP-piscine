CREATE TABLE ft_table ( 
  id INT PRIMARY KEY unsigned AUTO_INCREMENT NOT NULL,
  login varchar(11) default 'toto' NOT NULL,
  group ENUM('staff', 'student', 'other') NOT NULL,
  creation_date DATE NOT NULL
);