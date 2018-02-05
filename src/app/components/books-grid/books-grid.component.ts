import { StoreActionService } from './../../services/reducers/store-action/store-action.service';
import { Component, OnInit } from '@angular/core';
import { BookPresentationStructure } from './../../models/books';
import { ApiService } from './../../services/api/api.service';
import { CurrencyPipe } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-books-grid',
  templateUrl: './books-grid.component.html',
  providers: [CurrencyPipe, DatePipe],
  styleUrls: ['./books-grid.component.css']
})
export class BooksGridComponent implements OnInit {
  books;
  panelOpenState: Boolean = false;
  bookStructure = BookPresentationStructure;
  constructor(private storeAction: StoreActionService, private apiService: ApiService,
    private currencyPipe: CurrencyPipe, private datePipe: DatePipe) { }

  ngOnInit() {
    this.storeAction.selectBooks().subscribe(books => {
      this.books = books;
      this.panelOpenState = false;
    });
  }
  deleteBook(bookId){
    this.apiService.deleteBookById(bookId);
  }
  getContent(property, value){
    if (this.bookStructure[property].type === Date) {
      return this.datePipe.transform(value);
    } else if (this.bookStructure[property].unit === '$') {
      return this.currencyPipe.transform(value);
    } else {
      return value;
    }
  }

}
