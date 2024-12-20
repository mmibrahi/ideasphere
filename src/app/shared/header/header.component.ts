import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

  getLoginStatus(){
    var loginCredentials = sessionStorage.getItem('loginCredentials');
    return loginCredentials ? true : false;
  }

  mainPage(){
    window.location.href = "/main-page";
  }
  
}
