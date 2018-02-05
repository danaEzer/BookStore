import { ApiService } from './services/api/api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private apiService: ApiService) { 
    this.apiService.getAllBooks();
  }
}