import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Aos from 'aos';
import { Book } from 'src/app/models/book';
import { General } from 'src/app/models/general';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-bookstable',
  templateUrl: './bookstable.component.html',
  styleUrls: ['./bookstable.component.css']
})
export class BookstableComponent implements OnInit {

  bookList: General[] = [];

  constructor(private bookService: BookService, private router: Router) {
    this.loadTable();
  }

  ngOnInit(): void {
    this.loadTable();
    Aos.init({ once: true });
  }

  loadTable() {
    this.bookService.getGeneralTable().subscribe({
      next: (value) => {
        if (value != null || value != undefined) {
          this.bookList = value as General[];
        }
      },
    });
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe({
      next: (value) => {
        if (value != null || value != undefined) {
          this.loadTable();
        }
      },
    });
  }

  toUpdateBook(book: Book) {
    this.bookService.setBook(book);
    this.router.navigateByUrl('/books');
  }

}
