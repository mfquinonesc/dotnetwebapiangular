import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import * as Aos from 'aos';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authorService:AuthorService, private router: Router){}

  ngOnInit(): void {
    Aos.init({ once: true });
  }

  goToAuthor(){
    this.authorService.resetAuthor();
    this.router.navigateByUrl('/authors');
  }
}
