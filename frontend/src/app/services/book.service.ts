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

  private _newBook = new General(0, '', '', 0, 0);

  private _book = new BehaviorSubject<General>(this.newBook);

  constructor(private http: HttpClient) { }

  get newBook(){
    return this._newBook;
  }

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
    return this.http.put(`${this.path}/${id}`, book);
  }

  //This part of code has to be removed because is just a test 
  createFbBook(book: Book, id: number){
    return this.http.post('https://myapi-d979d-default-rtdb.firebaseio.com/datos.json',book).subscribe({
      next:(value)=> {
        console.log(value);                
      },
    });
  }
}
