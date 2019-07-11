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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    TransactionsComponent,
    ItineraryComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot()
  ],
  providers: [ AuthGuard , AuthService , PrivGuard , PrivService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
