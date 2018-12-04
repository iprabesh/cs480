import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  invalidLogin: boolean;

  constructor(private router: Router, private http: HttpClient) { }


  ngOnInit()
  {}
  login(form: NgForm) {
    let credentials = JSON.stringify(form.value);
    this.http.post("https://localhost:5000/api/Auth/login", credentials, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }).subscribe(response => {
      let token = (<any>response).token;
      localStorage.setItem("jwt", token);
      this.invalidLogin = false;
      this.router.navigate(["/books"]);
    }, err => {
      this.invalidLogin = true;
    });
  }
  
}
