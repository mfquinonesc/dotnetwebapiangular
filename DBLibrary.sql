DROP DATABASE IF EXISTS DBLibrary;
CREATE DATABASE DBLibrary;

USE DBLibrary;

CREATE TABLE TAuthor
(
    authorID int IDENTITY(1,1) PRIMARY KEY,
    name varchar(50) NOT NULL,
    lastname varchar(50) NOT NULL
);

CREATE TABLE TEditorial
(
    editorialID int IDENTITY(1,1) PRIMARY KEY,
    name varchar(50) NOT NULL,
    location varchar(50) NOT NULL
);

CREATE TABLE TBook
(
    bookID int IDENTITY(1,1) PRIMARY KEY,
    title varchar(100),
    description varchar(500),
    pages int,
    editorialID int NOT NULL,
    CONSTRAINT fk_TEditorial_TBook FOREIGN KEY (editorialID) REFERENCES TEditorial(editorialID)
);

CREATE TABLE TAuthor_HAS_TBook
(
    authorID int NOT NULL,
    bookID int NOT NULL,
    CONSTRAINT fk_TBook_THAS FOREIGN KEY (bookID) REFERENCES  TBook(bookID),
    CONSTRAINT fk_TAuthor_THAS FOREIGN KEY (authorID) REFERENCES  TAuthor(authorID),
    CONSTRAINT PK PRIMARY KEY(authorID,bookID)
);

INSERT INTO TAuthor
    (name,lastname)
VALUES('Chetan', 'Bhagat' );

INSERT INTO TAuthor
    (name,lastname)
VALUES('Satish' , 'Gujral' );

INSERT INTO TAuthor
    (name,lastname)
VALUES('Abul', 'Fazl' );

INSERT INTO TEditorial
    (name,location)
VALUES('Agenda Publishing', 'New York');

INSERT INTO TEditorial
    (name,location)
VALUES('Bristol University Press', 'New York');