import { Routes } from '@angular/router';
import {AccountsComponent} from './accounts/accounts.component';
import {CustomersComponent} from './customers/customers.component';
import {NewcustomerComponent} from './newcustomer/newcustomer.component';
import {LoginComponent} from './login/login.component';
import {AdminTemplateComponent} from './admin-template/admin-template.component';
import {authenticationGuard} from './guards/authentication/authentication.guard';
import {authorizationGuard} from './guards/authorization/authorization.guard';
import {NotAuthorizedComponent} from './not-authorized/not-authorized.component';

export const routes: Routes = [

  {path: "login", component: LoginComponent},
  {path: "", redirectTo: "/login", pathMatch: "full"},
  {path:"admin",component:AdminTemplateComponent,canActivate:[authenticationGuard],children:[
      {path: "accounts", component: AccountsComponent},
      {path: "customers", component: CustomersComponent},
      {path: "newcustomer", component: NewcustomerComponent , canActivate:[authorizationGuard],data:{role:"ADMIN"}},
      {path: "notAuthorized", component: NotAuthorizedComponent},
    ]},
];
