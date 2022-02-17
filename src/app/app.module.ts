import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ButtonCarrouselComponent } from './components/button-carrousel/button-carrousel.component';
import { GoToComponent } from './components/go-to/go-to.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { PixComponent } from './pages/pix/pix.component';
import { OpenFinanceComponent } from './pages/open-finance/open-finance.component';
import { CardsComponent } from './pages/cards/cards.component';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';
import { InvestmentsComponent } from './pages/investments/investments.component';
import { BorrowComponent } from './pages/borrow/borrow.component';
import { RechargeComponent } from './pages/recharge/recharge.component';
import { BalanceComponent } from './pages/balance/balance.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { BenefitsComponent } from './pages/benefits/benefits.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ButtonComponent,
    CarouselComponent,
    LoginComponent,
    HomeComponent,
    ButtonCarrouselComponent,
    GoToComponent,
    ForgetPasswordComponent,
    PixComponent,
    OpenFinanceComponent,
    CardsComponent,
    MarketplaceComponent,
    InvestmentsComponent,
    BorrowComponent,
    RechargeComponent,
    BalanceComponent,
    PaymentsComponent,
    BenefitsComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
