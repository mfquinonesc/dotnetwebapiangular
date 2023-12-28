import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { BooksComponent } from './views/books/books.component';
import { AuthorsComponent } from './views/authors/authors.component';
import { EditorialComponent } from './views/editorial/editorial.component';
import { BookstableComponent } from './views/bookstable/bookstable.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'authors', component: AuthorsComponent },
  { path: 'editorials', component: EditorialComponent },
  { path: 'booktable', component:BookstableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
