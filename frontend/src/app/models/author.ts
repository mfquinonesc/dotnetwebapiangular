export class Author {
    authorId?: number;
    name: string;
    lastname: string;
    constructor(authorId: number, name: string, lastname: string) {
        this.authorId = authorId;
        this.lastname = lastname;
        this.name = name;
    }
}
