import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BookComponent } from './book/book.component';
import { BookService } from './book.service';
import { AddBookComponent } from './addBook/addBook.component';
import { UpdateBookComponent } from './updateBook/updateBook.component';
import { SBookComponent } from './book/sBook/sBook.component';
import { AppRoutingModule } from './/app-routing.module';
import {AppComponent} from './app.component';
import { NavBarComponent } from './navBar/navBar.component';
import {FormsModule} from '@angular/forms';
import {LoginComponent} from './login/login.component';
import { AuthGuard} from './auth-guard/auth-guard.component';
import { JwtModule } from '@auth0/angular-jwt';
import { from } from 'rxjs/observable/from';



/*const JWT_Module_Options: JwtModuleOptions = {
  config: {
      tokenGetter: yourTokenGetter,
      whitelistedDomains: yourWhitelistedDomains
  }
};*/


export function tokenGetter() {
    return localStorage.getItem('access_token');
  }


  

@NgModule({
   declarations: [
      AppComponent,
      BookComponent,
      AddBookComponent,
      UpdateBookComponent,
      NavBarComponent,
      AuthGuard,
      LoginComponent,
      NavBarComponent

   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserModule,
    FormsModule,
    HttpClientModule,
    //JwtModule.forRoot(JWT_Module_Options),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3001'],
        blacklistedRoutes: ['localhost:3001/auth/']
    }
})


   ],

   providers: [
    AuthGuard,
    BookService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
