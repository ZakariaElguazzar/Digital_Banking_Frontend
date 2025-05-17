import { Routes } from '@angular/router';
import {AccountsComponent} from './accounts/accounts.component';
import {CustomersComponent} from './customers/customers.component';
import {NewcustomerComponent} from './newcustomer/newcustomer.component';

export const routes: Routes = [
  {path:"accounts",component:AccountsComponent},
  {path:"customers",component:CustomersComponent},
  {path:"newcustomer",component:NewcustomerComponent}
];
