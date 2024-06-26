import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { BooksComponent } from './views/books/books.component';
import { AuthorsComponent } from './views/authors/authors.component';
import { EditorialComponent } from './views/editorial/editorial.component';
import { BookstableComponent } from './views/bookstable/bookstable.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorstableComponent } from './views/authorstable/authorstable.component';
import { EditorialstableComponent } from './views/editorialstable/editorialstable.component';
import { AboutComponent } from './views/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    BooksComponent,
    AuthorsComponent,
    EditorialComponent,
    BookstableComponent,
    AuthorstableComponent,
    EditorialstableComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
