import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private http:HttpClient) {

  }
  public getAccounts() : Observable<Object>{
    return this.http.get("http://localhost:8080/bank_accounts/list_bank_accounts");
  }
}
