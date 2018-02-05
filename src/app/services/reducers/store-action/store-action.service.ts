import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { UPDATE_ALL_BOOKS, REMOVE_BOOK, ADD_NEW_BOOK } from '../book.reducer';
import { AppState } from './../store-app';
import { BookPresentationStructure } from './../../../models/books';

@Injectable()
export class StoreActionService {

  constructor(private store: Store<AppState>) { }

  updateAllBooks(books){
    this.store.dispatch({ type: UPDATE_ALL_BOOKS, payload: books });
  }
  removeBook(bookId: string){
    this.store.dispatch({ type: REMOVE_BOOK, payload: bookId });
  }
  addNewBook(book){
    this.store.dispatch({ type: ADD_NEW_BOOK, payload: book });
  }

  selectBooks(){
    return this.store.select('books');
  }
}
