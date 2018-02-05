import { Component, OnInit } from '@angular/core';
import { Book, Genre } from './../../models/books';
import { ValidationService } from './../../services/validation/validation.service';
import { ApiService } from './../../services/api/api.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  newBook: Book = new Book();
  presentationGenre = Genre[this.newBook.genre];
  errorMsg;
  // enum options
  genreOptions = Object.keys(Genre).slice(Object.keys(Genre).length / 2);
  constructor(private validationService: ValidationService, private apiService: ApiService) { }

  ngOnInit() {
  }
  addBook() {
    console.log(this.newBook)
    this.newBook.genre = this.presentationGenre;
    this.newBook.price = Number(this.newBook.price);
    if(this.validationService.validateBook(this.newBook)){
      this.errorMsg = null;
      this.apiService.addNewBook(this.newBook);
    } else {
      this.errorMsg = 'Invalid Book';
    }
  }
}
