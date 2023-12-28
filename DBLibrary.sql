DROP DATABASE IF EXISTS DBLibrary;
CREATE DATABASE DBLibrary;

USE DBLibrary;

CREATE TABLE Author
(
    authorID int IDENTITY(1,1) PRIMARY KEY,
    name varchar(50) NOT NULL,
    lastname varchar(50) NOT NULL
);

CREATE TABLE Editorial
(
    editorialID int IDENTITY(1,1) PRIMARY KEY,
    name varchar(50) NOT NULL,
    location varchar(50) NOT NULL
);

CREATE TABLE Book
(
    bookID int IDENTITY(1,1) PRIMARY KEY,
    title varchar(100),
    description varchar(500),
    pages int,
    editorialID int NOT NULL,
    CONSTRAINT fk_Editorial_Book FOREIGN KEY (editorialID) REFERENCES Editorial(editorialID)
);

CREATE TABLE Author_HAS_Book
(
    authorID int NOT NULL,
    bookID int NOT NULL,
    CONSTRAINT fk_Book_THAS FOREIGN KEY (bookID) REFERENCES  Book(bookID),
    CONSTRAINT fk_Author_THAS FOREIGN KEY (authorID) REFERENCES  Author(authorID),
    CONSTRAINT PK PRIMARY KEY(authorID,bookID)
);

INSERT INTO Author
    (name,lastname)
VALUES('Chetan', 'Bhagat' );

INSERT INTO Author
    (name,lastname)
VALUES('Satish' , 'Gujral' );

INSERT INTO Author
    (name,lastname)
VALUES('Abul', 'Fazl' );

INSERT INTO Editorial
    (name,location)
VALUES('Agenda Publishing', 'New York');

INSERT INTO Editorial
    (name,location)
VALUES('Bristol University Press', 'New York');

INSERT INTO Book
    ( title , description , pages , editorialID )
VALUES('The old man and the sea', 'Any description', 351, 1);

INSERT INTO Author_HAS_Book
    (authorID, bookID )
VALUES(1, 1);

CREATE VIEW General
AS
    SELECT b.bookID, a.authorID, e.editorialID, b.title, b.pages, b.description, a.name, a.lastname, e.name AS editorialname, e.location
    FROM Book b JOIN Author_HAS_Book ab ON b.bookID = ab.bookID JOIN Author a ON a.authorID = ab.authorID JOIN Editorial e ON e.editorialID = b.editorialID
GO