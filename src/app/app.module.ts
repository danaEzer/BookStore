import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Components
import { AppComponent } from './app.component';
// Services
import { ApiService } from './services/api/api.service';
import { StoreActionService } from './services/reducers/store-action/store-action.service';
import { KeysPipe } from './services/pipes/keys.pipe';
import { ValidationService } from './services/validation/validation.service';
// Reducers
import { StoreModule } from '@ngrx/store';
import { BooksReducer } from './services/reducers/book.reducer';
// Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { BooksGridComponent } from './components/books-grid/books-grid.component';
import { BookAddComponent } from './components/book-add/book-add.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    BooksGridComponent,
    BookAddComponent,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ books: BooksReducer }),
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTabsModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [ApiService, StoreActionService, ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
