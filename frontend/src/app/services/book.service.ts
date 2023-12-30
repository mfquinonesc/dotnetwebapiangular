import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  path: string = 'https://localhost:7083/api/book';

  constructor(private http: HttpClient) { }

  getGeneralTable(): Observable<any> {
    return this.http.get(`${this.path}/all`);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.path}/${id}`);
  }

  createBook(book: Book, authorId: number): Observable<any> {
    return this.http.post(`${this.path}/${authorId}`, book);
  }
}
