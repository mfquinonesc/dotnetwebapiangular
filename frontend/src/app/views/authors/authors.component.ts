import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  ngOnInit(): void {
    Aos.init({ once: true });
  }

}
