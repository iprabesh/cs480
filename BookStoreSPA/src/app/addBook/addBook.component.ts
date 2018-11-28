import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-addBook',
  templateUrl: './addBook.component.html',
  styleUrls: ['./addBook.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private _bookServ: BookService) { }

  ngOnInit() {
  }

  createBook(cTitle: string, cAuthor: string){
    this._bookServ.addBook(cTitle, cAuthor).subscribe(
      x => console.log('book is added')
    );
  }


}
