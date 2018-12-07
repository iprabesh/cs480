import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookService } from './book.service';
import { AddBookComponent } from './addBook/addBook.component';
import { UpdateBookComponent } from './updateBook/updateBook.component';
import { SBookComponent } from './book/sBook/sBook.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavBarComponent } from './navBar/navBar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DescriptionsComponent } from './descriptions/descriptions.component';


@NgModule({
   declarations: [
      AppComponent,
      BookComponent,
      AddBookComponent,
      UpdateBookComponent,
      SBookComponent,
      NavBarComponent,
      JumbotronComponent,
      HomePageComponent,
      DescriptionsComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule
   ],
   providers: [
      BookService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
