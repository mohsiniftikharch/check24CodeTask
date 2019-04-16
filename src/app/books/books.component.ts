import { Component, OnInit } from '@angular/core';
import {BooksService} from '../services/books.service';
import {Book} from '../model/book';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  bookData: Book[];
  constructor(private bookService: BooksService) { }

  ngOnInit() {
    this.bookService.get().subscribe(data => {
      this.bookData = data;
    });
  }

}
