import { Injectable } from '@angular/core';
@Injectable()
export class ValidationService {


  constructor() { }

  validateBook(book){
    return book.title && book.ISBN && book.author && book.description &&
        book.genre && this.validateGenre(book.genre) &&
        this.validationNumber(book.price);
  }
  validateGenre(genre){
      return true;
  }
  validationNumber(price){
    return price === 0 || price === '0' || Number(price);
  }
}
