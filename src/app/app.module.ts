import { ErrorService } from './error/error.service';
import { PrivService } from './shared/priv.service';
import { PrivGuard } from './shared/priv-guard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { ItineraryComponent } from './itinerary/itinerary.component';
import { AuthGuard } from './shared/auth-guard.service';
import { AuthService } from './shared/auth.service';
import { ErrorComponent } from './error/error.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { TransactionQueryComponent } from './transaction-query/transaction-query.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionItemComponent } from './transactions/transaction-item/transaction-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    TransactionsComponent,
    ItineraryComponent,
    ErrorComponent,
    AboutComponent,
    FooterComponent,
    TransactionQueryComponent,
    TransactionListComponent,
    TransactionItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot()
  ],
  providers: [ AuthGuard , AuthService , PrivGuard , PrivService , ErrorService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
