import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { Author } from '../models/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  private _author = new BehaviorSubject<Author>(new Author(0, '', ''));

  path: string = 'https://localhost:7083/api/author';

  constructor(private http: HttpClient) { }

  setAuthor(value: Author) {
    this._author.next(value);
  }

  getAuthor(): Observable<Author> {
    return this._author.asObservable();
  }

  resetAuthor() {
    this.setAuthor(new Author(0, '', ''));
  }

  getAllAuthors(): Observable<any> {
    return this.http.get(this.path);
  }

  getAuthorById(id: number): Observable<any> {
    return this.http.get(`${this.path}/${id}`);
  }

  createAuthor(author: Author): Observable<any> {
    return this.http.post(this.path, author);
  }

  deleteAuthor(id: number): Observable<any> {
    return this.http.delete(`${this.path}/${id}`);
  }

  updateAuthor(id: number, author: Author): Observable<any> {
    return this.http.put(`${this.path}/${id}`, author);
  }

}
