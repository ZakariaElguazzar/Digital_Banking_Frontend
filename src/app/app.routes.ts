import { Routes } from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {AccountsComponent} from './accounts/accounts.component';
import {CustomersComponent} from './customers/customers.component';

export const routes: Routes = [
  {path:"accounts",component:AccountsComponent},
  {path:"customers",component:CustomersComponent},
];
