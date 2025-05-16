import {Component, OnInit} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {AccountsService} from '../services/Acc/accounts.service';
import {Account} from '../Model/model';
import {catchError, Observable, throwError} from 'rxjs';

@Component({
  selector: 'app-accounts',
  imports: [
    NgForOf,
    NgIf,
    AsyncPipe
  ],
  templateUrl: './accounts.component.html',
  styleUrl: './accounts.component.css'
})
export class AccountsComponent implements OnInit{
  private accounts ! : Observable<Array<Account>>;
  private messageError !: Object;
  constructor(private accService:AccountsService) {
  }

  ngOnInit(): void {
        /*this.accService.getAccounts().subscribe(
          {
            next : (data) => this.accounts = data,
            error : (err)=> console.log(err)
          }
        )*/
    this.accounts=this.accService.getAccounts().pipe(
      catchError((err)=>{
        this.messageError=err;
        return throwError(()=>err);
      })
    );

  }
  getAccounts(){
    return this.accounts;
  }




}
