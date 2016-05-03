-- DROP USER `guest`@`localhost`; /* Uncomment to run script again */
--
-- CREATE USER `guest`@`localhost` IDENTIFIED BY 'guest';
GRANT ALL PRIVILEGES ON companydb.* TO `guest`@`localhost`;


CREATE TABLE contact
(
  id                 INTEGER NOT NULL AUTO_INCREMENT,
  firstName          VARCHAR(30) NOT NULL,
  lastName           VARCHAR(30) NOT NULL,
  phoneNumber        VARCHAR(30),
  PRIMARY KEY (id)
);

-- CREATE TABLE contact (id INTEGER NOT NULL AUTO_INCREMENT, firstname VARCHAR(30) NOT NULL, lastname VARCHAR(30), sex VARCHAR(6), age INTEGER, phoneNumber VARCHAR(12), PRIMARY KEY(id));
-- insert into departments (name, location_id) values ('Administration', 2);
