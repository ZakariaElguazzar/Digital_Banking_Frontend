import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {AccountsService} from '../services/Acc/accounts.service';

@Component({
  selector: 'app-accounts',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent implements OnInit{
  private accounts : any;
  constructor(private accService:AccountsService) {
  }

  ngOnInit(): void {
        this.accService.getAccounts().subscribe(
          {
            next : (data) => this.accounts = data,
            error : (err)=> console.log(err)
          }
        )
  }
  getAccounts(){
    return this.accounts;
  }




}
