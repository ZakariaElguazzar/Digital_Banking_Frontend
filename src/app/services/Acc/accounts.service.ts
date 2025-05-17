import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Account} from '../../Model/model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  constructor(private http:HttpClient) {

  }
  public getAccounts() : Observable<Array<Account>>{
    return this.http.get<Array<Account>>(environment.apiUrlAccounts+"/list_bank_accounts");
  }
}
