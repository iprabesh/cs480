import { Component, OnInit, Input } from '@angular/core';
import { BookModel } from '../../../BookModel';
import {BookService} from '../../book.service';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-sBook',
  templateUrl: './sBook.component.html',
  styleUrls: ['./sBook.component.css']
})
export class SBookComponent implements OnInit {

  @Input() sBookProp: BookModel;
  constructor(private _bookServ: BookService) { }

  ngOnInit() {
  }

}

