import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) {
  }

  public get(): Observable<Book[]> {
    const serviceUri = ('/assets/booksData.ts');
    return this.http.get<Book[]>(serviceUri);
  }
}
