import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as Aos from 'aos';
import { Editorial } from 'src/app/models/editorial';
import { EditorialService } from 'src/app/services/editorial.service';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.css']
})
export class EditorialComponent implements OnInit {

  editorialForm = this.formBuilder.group({
    name: ['', Validators.required],
    location: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder, private editorialService: EditorialService, private router: Router) { }

  ngOnInit(): void {
    Aos.init({ once: true });
  }

  get name() {
    return this.editorialForm.controls.name;
  }

  get location() {
    return this.editorialForm.controls.location;
  }

  get nameValue() {
    return this.editorialForm.value.name;
  }

  get locationValue() {
    return this.editorialForm.value.location;
  }

  createEditorial() {
    if (this.editorialForm.valid) {
      const editorial = new Editorial(0, this.nameValue!, this.locationValue!);
      this.editorialService.createEditorial(editorial).subscribe({
        next: (value) => {
          if (value != null && value != undefined) {
            this.router.navigateByUrl('editorials/table');
          }
        },
      });
    }
  }


}
