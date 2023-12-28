import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-bookstable',
  templateUrl: './bookstable.component.html',
  styleUrls: ['./bookstable.component.css']
})
export class BookstableComponent implements OnInit {
  ngOnInit(): void {
    Aos.init({ once: true });
  }
}
