USE DBLibrary;

CREATE PROCEDURE saveAuthorBook
    @authorID INT,
    @bookID INT
AS
INSERT INTO Author_HAS_Book
    (authorID , bookID)
VALUES
    (@authorID, @bookID);
GO


CREATE PROCEDURE deleteAuthorBook
    @bookID INT
AS
DELETE FROM Author_HAS_Book WHERE (Author_HAS_Book.bookID = @bookID);
GO
