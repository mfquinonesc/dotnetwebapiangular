export class Book {
    bookId?: number;
    title: string;
    description: string;
    pages: number;
    editorialId: number;

    constructor(bookId: number, title: string, description: string, pages: number, editorialId: number) {
        this.bookId = bookId;
        this.description = description;
        this.pages = pages;
        this.editorialId = editorialId;
        this.title = title;
    }
}
