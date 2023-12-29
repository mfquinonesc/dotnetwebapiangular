import { Component, OnInit } from '@angular/core';
import { Author } from 'src/app/models/author';
import { AuthorService } from 'src/app/services/author.service';
import * as Aos from 'aos';

@Component({
  selector: 'app-authorstable',
  templateUrl: './authorstable.component.html',
  styleUrls: ['./authorstable.component.css']
})
export class AuthorstableComponent implements OnInit {

  authorList: Author[] = [];

  constructor(private authorService: AuthorService) {
    this.loadTable();
  }

  ngOnInit(): void {
    this.loadTable();
    Aos.init({ once: true });
  }

  loadTable() {
    this.authorService.getAllAuthors().subscribe({
      next: (value) => {
        if (value != null && value != undefined) {
          this.authorList = value as Author[];
        }
      },
    });
  }

  deleteAuthor(id: number) {
    this.authorService.deleteAuthor(id).subscribe({
      next: (value) => {
        if (value != null || value != undefined) {
          this.loadTable();
        }
      },
    });
  }

  updateAuthor(id:number){

  }


}
