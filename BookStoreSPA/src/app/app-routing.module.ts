import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './addBook/addBook.component';
import { BookComponent } from './book/book.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {path: 'add', component: AddBookComponent},
  { path: 'login', component: LoginComponent },
  {path: 'books', component: BookComponent}
];

@NgModule({
 exports: [ RouterModule ],
 imports: [RouterModule.forRoot(routes)]
})


export class AppRoutingModule { }

