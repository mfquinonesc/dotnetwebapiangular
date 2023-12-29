import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Author } from '../models/author';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  path: string = 'https://localhost:7083/api/author';

  constructor(private http: HttpClient) { }

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

}
