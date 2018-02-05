import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StoreActionService } from '../reducers/store-action/store-action.service';
import { environment } from './../../../environments/environment.prod';
@Injectable()
export class ApiService {

  booksApiURL = environment.domain + environment.port + environment.booksPath;

  constructor(private http: HttpClient, private storeAction: StoreActionService) { }

  getAllBooks(){
    this.http.get(this.booksApiURL).subscribe(res => {
      this.storeAction.updateAllBooks(res);
    },
    error => {
      console.log('error', error);
    });
  }
  addNewBook(book){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    this.http.post(this.booksApiURL, book, httpOptions).subscribe(res => {
      this.storeAction.addNewBook(res['book']);
    },
    error => {
      console.log('error', error);
    });
  }

  deleteBookById(bookId){
    this.http.delete(this.booksApiURL + '/' + bookId).subscribe(res => {
      this.storeAction.removeBook(bookId);
    },
    error => {
      console.log('error', error);
    });
  }

//   getRequestOptions() {
//     let headersValue = new Headers({
//         'Content-Type': 'application/json',
//     });
//     let options = new RequestOptions({
//         headers: headersValue
//     });
//     return options;
// }
}
