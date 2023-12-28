export class Editorial {
    editorialId:number;
    name:string;
    location:string;

    constructor(editorialId:number,name:string,location:string){
        this.editorialId = editorialId;
        this.location = location;
        this.name = name; 
    }
}
