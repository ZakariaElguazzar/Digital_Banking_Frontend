import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {jwtDecode} from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isAutenticated : boolean = false;
  roles : any;
  username : any;
  accessToken !: string;

  constructor(private http:HttpClient) {
  }
  public Login(username:string,password:string){
    let options =
      {
        headers:new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded")
      }
    let params = new HttpParams().set("username",username).set("password",password);
    return this.http.post(environment.apiUrlLogin+"/login",params,options);
  }

  loadProfile(data:any) {
    this.isAutenticated=true;
    this.accessToken= data["access_token"];
    let decodedJwt:any= jwtDecode(this.accessToken);
    this.username = decodedJwt.sub;
    this.roles = decodedJwt.scope;
  }
}
