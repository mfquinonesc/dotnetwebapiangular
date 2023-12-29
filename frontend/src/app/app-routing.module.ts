import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { BooksComponent } from './views/books/books.component';
import { AuthorsComponent } from './views/authors/authors.component';
import { EditorialComponent } from './views/editorial/editorial.component';
import { BookstableComponent } from './views/bookstable/bookstable.component';
import { AuthorstableComponent } from './views/authorstable/authorstable.component';
import { EditorialstableComponent } from './views/editorialstable/editorialstable.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'editorials', component: EditorialComponent },
  { path: 'books/table', component: BookstableComponent },
  { path: 'authors/table', component: AuthorstableComponent },
  { path: 'editorials/table', component: EditorialstableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
