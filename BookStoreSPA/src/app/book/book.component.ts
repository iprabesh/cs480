import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: any;
  constructor(private bookServ: BookService) { }


  ngOnInit() {
    this.getBooksComp();
  }

  getBooksComp() {
    this.bookServ.getBooks().subscribe(
        x => this.books = x
    );

}