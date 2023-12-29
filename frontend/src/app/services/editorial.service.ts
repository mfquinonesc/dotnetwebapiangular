import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Editorial } from '../models/editorial';

@Injectable({
  providedIn: 'root'
})
export class EditorialService {

  path: string = 'https://localhost:7083/api/editorial';

  constructor(private http: HttpClient) { }

  getAllEditorials(): Observable<any> {
    return this.http.get(this.path);
  }

  createEditorial(editorial: Editorial): Observable<any> {
    return this.http.post(this.path, editorial);
  }

  deleteEditorial(id: number): Observable<any> {
    return this.http.delete(`${this.path}/${id}`);
  }
}
