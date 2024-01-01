import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Aos from 'aos';
import { AuthorService } from 'src/app/services/author.service';
import { BookService } from 'src/app/services/book.service';
import { EditorialService } from 'src/app/services/editorial.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authorService: AuthorService, private router: Router, private editorialService: EditorialService,private bookService:BookService) { }

  ngOnInit(): void {
    Aos.init({ once: true });
  }

  goToAuthor() {
    this.authorService.resetAuthor();
    this.router.navigateByUrl('/authors');
  }

  goToEditorial() {
    this.editorialService.resetEditorial();
    this.router.navigateByUrl('/editorials');
  }

  goToBook(){
    this.bookService.resetBook();
    this.router.navigateByUrl('/books');
  }
}
