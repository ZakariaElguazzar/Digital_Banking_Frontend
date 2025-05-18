import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginService} from './services/Login/login.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'hoop';
  constructor(private logService:LoginService) {
  }

  ngOnInit(): void {
        this.logService.loadJwtTokenFromLocalStorage();
    }

}
