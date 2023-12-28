USE DBLibrary;

CREATE PROCEDURE Save_Author_HAS_Book
    @authorID INT,
    @bookID INT
AS
INSERT INTO Author_HAS_Book
VALUES(@authorID, @bookID);
GO

ALTER PROCEDURE Delete_Author_HAS_Book
    @bookID INT
AS
DELETE FROM Author_HAS_Book WHERE (bookID = @bookID);
DELETE FROM Book WHERE (bookID = @bookID);
GO

DROP PROCEDURE Save_Author_HAS_Book;
DROP PROCEDURE Delete_Author_HAS_Book;
