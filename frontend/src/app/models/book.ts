export class Book {
    bookId?: number;
    title: string;
    description: string;
    pages: number;
    editorialId: string;

    constructor(bookId: number, title: string, description: string, pages: number, editorialId: string) {
        this.bookId = bookId;
        this.description = description;
        this.pages = pages;
        this.editorialId = editorialId;
        this.title = title;
    }
}
