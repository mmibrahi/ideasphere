import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
//import { FormGroup } from '@angular/forms';
// import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SignupLoginService {

  private baseUrl = 'http://localhost:8080/api';  // Replace with your actual backend URL

  constructor(private httpClient: HttpClient) { }

    // login(loginForm: FormGroup<any>){
    //   var v1 = 'Basic ' + btoa(loginForm.value.username + ":" + loginForm.value.password);
    //   let headers = new HttpHeaders({Authorization: v1}); 
    //   return this.httpClient.get<any>('https://spring-boot-example1-app.herokuapp.com/person/login', { headers });
    // }

    login(loginForm: FormGroup) {
      const authHeader = 'Basic ' + btoa(loginForm.value.username + ":" + loginForm.value.password);
      const headers = new HttpHeaders({ Authorization: authHeader });
      return this.httpClient.get<any>(`${this.baseUrl}/login`, { headers });
    }
}
