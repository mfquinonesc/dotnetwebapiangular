import { Book } from "./book";

export class General implements Book{
    bookId?: number | undefined;
    title: string;
    description: string;
    pages: number;
    editorialId: number;
    authorId?: number;
    name?: string;
    lastname?: string;
    editorialname?: string;
    location? : string;

    constructor(bookId: number, title: string, description: string, pages: number, editorialId: number){
        this.bookId = bookId;
        this.description = description;
        this.pages = pages;
        this.editorialId = editorialId;
        this.title = title;
    }
}
