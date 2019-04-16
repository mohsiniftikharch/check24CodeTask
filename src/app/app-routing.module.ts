import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {BooksComponent} from './books/books.component';
import {DetailsComponent} from './details/details.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  { path: 'task/login', component: LoginComponent },
  { path: 'task/books', component: BooksComponent },
  {path : 'task/details', component : DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
