import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(private authSvc: AuthService) { }

  ngOnInit() {
  }
  login ()
  {
    //console.log(this.model);
    this.authSvc.login(this.model).subscribe(next => {
      console.log("Logged in");
    }, error => {
      console.log(error);
    });
  }

  loggedIn()
  {
    const token = localStorage.getItem('token');
    return !!token;
  } 
  loggedOut()
  {
    localStorage.removeItem('token');
    console.log('logged out');
  }
  
}
