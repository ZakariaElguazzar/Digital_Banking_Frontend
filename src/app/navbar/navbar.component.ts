import {Component, OnInit} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {LoginService} from '../services/Login/login.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  constructor(private logService:LoginService,private router : Router) {
  }

  ngOnInit(): void {
    }

  handleLogout() {
    this.logService.logout()
    this.router.navigateByUrl("/login").then(success =>
      {
        if (!success)
          console.error("Navigation to /login failed!");
      }
    );

  }
  getLogService(){
    return this.logService;
  }
}
