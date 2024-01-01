import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Editorial } from '../models/editorial';

@Injectable({
  providedIn: 'root'
})
export class EditorialService {

  path: string = 'https://localhost:7083/api/editorial';

  private _editorial = new BehaviorSubject<Editorial>(new Editorial(0, '', ''));

  constructor(private http: HttpClient) { }

  setEditorial(value: Editorial) {
    this._editorial.next(value);
  }

  getEditorial() {
    return this._editorial.asObservable();
  }

  resetEditorial() {
    this.setEditorial(new Editorial(0, '', ''));
  }

  getAllEditorials(): Observable<any> {
    return this.http.get(this.path);
  }

  createEditorial(editorial: Editorial): Observable<any> {
    return this.http.post(this.path, editorial);
  }

  deleteEditorial(id: number): Observable<any> {
    return this.http.delete(`${this.path}/${id}`);
  }

  updateEditorial(id: number, editorial: Editorial): Observable<any> {
    return this.http.put(`${this.path}/${id}`, editorial);
  }
}
