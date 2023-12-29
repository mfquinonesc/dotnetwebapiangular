import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { Author } from 'src/app/models/author';
import { Editorial } from 'src/app/models/editorial';
import { AuthorService } from 'src/app/services/author.service';
import { EditorialService } from 'src/app/services/editorial.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  editorialsList: Editorial[] = [];
  authorsList: Author[] = [];
  
  constructor(private editorialService: EditorialService, private authorService: AuthorService) { 
    this.loadAuthors();
    this.loadEditorials();
  }

  ngOnInit(): void {
    this.loadAuthors();
    this.loadEditorials();
    Aos.init({ once: true });
  }

  loadEditorials() {
    this.editorialService.getAllEditorials().subscribe({
      next: (value) => {
        if (value != null && value != undefined) {
          this.editorialsList = value as Editorial[];
        }
      },
    });
  }

  loadAuthors() {
    this.authorService.getAllAuthors().subscribe({
      next: (value) => {
        if (value != null && value != undefined) {
          this.authorsList = value as Author[];
        }
      },
    });
  }
  
}
