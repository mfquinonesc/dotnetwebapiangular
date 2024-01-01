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

  _editorial: Editorial = new Editorial(0, '', '');

  constructor(private formBuilder: FormBuilder, private editorialService: EditorialService, private router: Router) { 
    this.loadUpdateEditorial();
  }

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

  loadUpdateEditorial() {
    this.editorialService.getEditorial().subscribe({
      next: (value) => {
        if (value != new Editorial(0, '', '')) {
          this._editorial = value;
          this.editorialForm.setValue({
            name: value.name,
            location: value.location
          });
        }
      },
    });
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

  updateEditorial() {
    if (this.editorialForm.valid) {
      const editorial = new Editorial(this._editorial.editorialId,this.nameValue!,this.locationValue!);
      this.editorialService.updateEditorial(this._editorial.editorialId,editorial).subscribe({
        next: (value)=>{
        if(value != null || value != undefined){
          this.router.navigateByUrl('/editorials/table');
        }
      },});
    }
  }

  saveEditorial(){
    if(this._editorial.editorialId != 0){
      this.updateEditorial();
    }else {
      this.createEditorial();
    }
  }

  cancel(){
    if(this._editorial.editorialId != 0){
      this.router.navigateByUrl('/editorials/table');
    }else{
      this.router.navigateByUrl('/');
    }
  }

}
