DROP DATABASE IF EXISTS nc_schools;

CREATE DATABASE nc_schools;
USE nc_schools;

CREATE TABLE school (
	id INT NOT NULL AUTO_INCREMENT,
    inst_name VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    zip INT NOT NULL,
	url VARCHAR(255) NOT NULL,
    in_state INT NOT NULL,
    out_state INT NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE student (
	student_name VARCHAR(255) NOT NULL,
    degree_type VARCHAR(255) NOT NULL,
    program VARCHAR(255) NOT NULL,
    home_state VARCHAR(255) NOT NULL
);