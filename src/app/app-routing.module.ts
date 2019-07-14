import { AboutComponent } from './about/about.component';
import { ErrorComponent } from './error/error.component';
import { PrivGuard } from './shared/priv-guard.service';
import { AuthGuard } from './shared/auth-guard.service';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TransactionsComponent } from './transactions/transactions.component';

const routes: Routes = [
  {path: '', redirectTo: 'Transactions', pathMatch: 'full' , canActivate: [AuthGuard]},
  {path: 'Transactions', component: TransactionsComponent , canActivate: [AuthGuard]},
  {path: 'Itinerary', component: ItineraryComponent , canActivate: [PrivGuard , AuthGuard]},
  {path: 'Login', component: LoginComponent},
  {path: 'About', component: AboutComponent , canActivate: [AuthGuard]},
  {path: 'Settings', component: ItineraryComponent , canActivate: [AuthGuard]},
  {path: 'Error', component: ErrorComponent},
  {path: '**', redirectTo: 'Transactions'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
