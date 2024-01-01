import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Book } from '../models/book';
import { General } from '../models/general';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  path: string = 'https://localhost:7083/api/book';

  private _book = new BehaviorSubject<General>(new General(0, '', '', 0, 0));

  constructor(private http: HttpClient) { }

  setBook(value: General) {
    this._book.next(value);
  }

  getBook() {
    return this._book.asObservable();
  }

  resetBook() {
    this.setBook(new General(0, '', '', 0, 0));
  }

  getGeneralTable(): Observable<any> {
    return this.http.get(`${this.path}/all`);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.path}/${id}`);
  }

  createBook(book: Book, authorId: number): Observable<any> {
    return this.http.post(`${this.path}/${authorId}`, book);
  }

  updateBook(book: Book, id: number): Observable<any> {
    return this.http.post(`${this.path}/${id}`, book);
  }
}
