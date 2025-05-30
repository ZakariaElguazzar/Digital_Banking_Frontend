import {Component, OnInit} from '@angular/core';
import { RouterLink} from '@angular/router';
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

  constructor(private logService:LoginService) {
  }

  ngOnInit(): void {
    }

  handleLogout() {
    this.logService.logout()
  }
  getLogService(){
    return this.logService;
  }
}
