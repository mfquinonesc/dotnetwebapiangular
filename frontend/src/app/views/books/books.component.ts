import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as Aos from 'aos';
import { Author } from 'src/app/models/author';
import { Book } from 'src/app/models/book';
import { Editorial } from 'src/app/models/editorial';
import { General } from 'src/app/models/general';
import { AuthorService } from 'src/app/services/author.service';
import { BookService } from 'src/app/services/book.service';
import { EditorialService } from 'src/app/services/editorial.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  editorialsList: Editorial[] = [];
  authorsList: Author[] = [];

  bookForm = this.formBuilder.group({
    title: ['', Validators.required],
    page: ['', Validators.required],
    editorial: ['', Validators.required],
    author: ['', Validators.required],
    description: ['', Validators.required]
  });

  _book: General = new General(0, '', '', 0, 0);


  constructor(private editorialService: EditorialService, private authorService: AuthorService, private bookService: BookService, private formBuilder: FormBuilder, private router: Router) {
    this.loadAuthors();
    this.loadEditorials();   
    this.fillForm();
  }

  ngOnInit(): void {  
    Aos.init({ once: true });
  }

  get title() {
    return this.bookForm.controls.title;
  }
  get page() {
    return this.bookForm.controls.page;
  }
  get editorial() {
    return this.bookForm.controls.editorial;
  }
  get author() {
    return this.bookForm.controls.author;
  }
  get description() {
    return this.bookForm.controls.description;
  }

  get titleValue() {
    return this.bookForm.value.title;
  }
  get pageValue(): number {
    return this.bookForm.value.page as unknown as number;
  }
  get editorialValue() {
    return this.bookForm.value.editorial as unknown as Editorial;
  }
  get authorValue() {
    return this.bookForm.value.author as unknown as Author;
  }
  get descriptionValue() {
    return this.bookForm.value.description;
  }

  loadUpdateBook() {
    let result = undefined;
    this.bookService.getBook().subscribe({
      next: (value) => {
        if (value != new General(0, '', '', 0, 0)) {
          this._book = value as General; 
          result =  this._book;
        }
      },
    });
    return result;
  }

  fillForm(){
    Promise.resolve(this.loadUpdateBook()).then((value)=>{
      if(value){
        const book = value as General;
        this.bookForm.setValue({
          title: book.title,
          page: book.pages.toString(),
          editorial: null,
          author: null,
          description: book.description
        });        
      }
    });
  }

  loadEditorials() {
    this.editorialService.getAllEditorials().subscribe({
      next: (value) => {
        if (value) {
          this.editorialsList = value as Editorial[];
        }
      },
    });
  }

  loadAuthors() {
    this.authorService.getAllAuthors().subscribe({
      next: (value) => {
        if (value) {
          this.authorsList = value as Author[];
        }
      },
    });
  }

  createBook() {
    if (this.bookForm.valid) {
      const authorId = this.authorValue.authorId;
      const editorialId = this.editorialValue.editorialId;
      const book = new Book(0, this.titleValue!, this.descriptionValue!, this.pageValue, editorialId);
      this.bookService.createFbBook(book, authorId!);
      // .subscribe({
      //   next: (value) => {
      //     if (value) {
      //       this.router.navigateByUrl('books/table');
      //     }
      //   },      
      // });
    }
  }

  updateBook() {
    if (this.bookForm.valid) {
      const authorId = this.authorValue.authorId;
      const editorialId = this.editorialValue.editorialId;
      const book = new Book(0, this.titleValue!, this.descriptionValue!, this.pageValue, editorialId);
      this.bookService.updateBook(book, this._book.bookId!).subscribe({
        next: (value) => {
          if (value != null && value != undefined) {
            this.router.navigateByUrl('/books/table');
          }
        },
      });
    }
  }

  saveAuthor() {  
    if (this._book.bookId != 0) {
      this.updateBook();     
    } else {
      this.createBook();
    }
  }

  cancel() {
    if (this._book.bookId != 0) {
      this.router.navigateByUrl('/books/table');
    } else {
      this.router.navigateByUrl('/');
    }
  }
}
