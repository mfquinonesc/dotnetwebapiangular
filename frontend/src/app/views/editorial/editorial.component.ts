import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.css']
})
export class EditorialComponent implements OnInit {
  ngOnInit(): void {
    Aos.init({ once: true });
  }
}
