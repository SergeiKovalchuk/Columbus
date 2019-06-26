import { AuthGuard } from './shared/auth-guard.service';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  {path: '', redirectTo: 'Transactions', pathMatch: 'full'},
  {path: 'Transactions', component: TransactionsComponent},
  {path: 'Itinerary', component: ItineraryComponent },
  {path: 'Login', component: LoginComponent},
  {path: '**', redirectTo: 'Transactions'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
