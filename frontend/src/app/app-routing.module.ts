import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthorComponent } from './author/author.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'/',component:HomeComponent}, 
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'books',component:BooksComponent},
  {path:'authors',component:AuthorsComponent},
  {path:'author',component:AuthorComponent},
  {path:'addbook',component:AddbookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
