import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as Aos from 'aos';
import { Author } from 'src/app/models/author';
import { AuthorService } from 'src/app/services/author.service';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authorForm = this.formBuilder.group({
    name: ['', Validators.required],
    lastname: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder, private authorService: AuthorService, private router: Router) { }

  ngOnInit(): void {
    Aos.init({ once: true });
  }

  get name() {
    return this.authorForm.controls.name;
  }

  get lastname() {
    return this.authorForm.controls.lastname;
  }

  get nameValue() {
    return this.authorForm.value.name;
  }

  get lastnameValue() {
    return this.authorForm.value.lastname;
  }

  createAuthor() {
    if (this.authorForm.valid) {
      const author = new Author(0, this.nameValue!, this.lastnameValue!)
      this.authorService.createAuthor(author).subscribe({
        next: (value) => {
          if(value != null || value != undefined){
            this.router.navigateByUrl("authors/table");
          }
        },error(err) {
          alert('Something went wrong!');
        },
      });
    }
  }


  


}
