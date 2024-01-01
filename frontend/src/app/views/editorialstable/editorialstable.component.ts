import { Component, OnInit } from '@angular/core';
import { Editorial } from 'src/app/models/editorial';
import * as Aos from 'aos';
import { EditorialService } from 'src/app/services/editorial.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editorialstable',
  templateUrl: './editorialstable.component.html',
  styleUrls: ['./editorialstable.component.css']
})
export class EditorialstableComponent implements OnInit {

  editorialsList: Editorial[] = [];

  constructor(private editorialService: EditorialService,private router: Router) {
    this.loadTable();
  }

  ngOnInit(): void {
    this.loadTable();
    Aos.init({ once: true });
  }

  loadTable() {
    this.editorialService.getAllEditorials().subscribe({
      next: (value) => {
        if (value != null && value != undefined) {
          this.editorialsList = value as Editorial[];
        }
      },
    });
  }

  deleteEditorial(id: number) {
    this.editorialService.deleteEditorial(id).subscribe({
      next: (value) => {
        if (value != null && value != undefined) {
          this.loadTable();
        }
      },
    })
  }

  toUpdateEditorial(editorial:Editorial){
    this.editorialService.setEditorial(editorial);
    this.router.navigateByUrl('/editorials');
  }

}
