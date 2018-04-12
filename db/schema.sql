DROP DATABASE IF EXISTS nc_schools;
CREATE DATABASE nc_schools;
USE nc_schools;

CREATE TABLE School (
   id INT NOT NULL AUTO_INCREMENT,
   inst_name VARCHAR(100) NOT NULL,
   city VARCHAR(100) NOT NULL,
   zip INT NOT NULL,
   school_url VARCHAR(100) NOT NULL,
   in_state INT NOT NULL,
   degree_type INT NOT NULL,
   PRIMARY KEY (id) 
);

CREATE TABLE Student(
   id INT NOT NULL AUTO_INCREMENT,
   degree_type VARCHAR(100) NOT NULL,
   program VARCHAR(100) NOT NULL,
   max_tuition INT NOT NULL,
   PRIMARY KEY (id)
 );