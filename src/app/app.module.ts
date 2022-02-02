import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { RecargasComponent } from './pages/recargas/recargas.component';
import { PixComponent } from './pages/pix/pix.component';
import { ExtratoComponent } from './pages/extrato/extrato.component';
import { PagamentosComponent } from './pages/pagamentos/pagamentos.component';
import { BeneficiosComponent } from './pages/beneficios/beneficios.component';
import { OpenFinanceComponent } from './pages/open-finance/open-finance.component';
import { InvestimentosComponent } from './pages/investimentos/investimentos.component';
import { EmprestimosComponent } from './pages/emprestimos/emprestimos.component';
import { CartoesComponent } from './pages/cartoes/cartoes.component';
import { LojaComponent } from './pages/loja/loja.component';
import { CardsComponent } from './pages/cards/cards.component';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';
import { InvestmentsComponent } from './pages/investments/investments.component';
import { BorrowComponent } from './pages/borrow/borrow.component';
import { RechargeComponent } from './pages/recharge/recharge.component';
import { BalanceComponent } from './pages/balance/balance.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { BenefitsComponent } from './pages/benefits/benefits.component';

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
    RecargasComponent,
    PixComponent,
    ExtratoComponent,
    PagamentosComponent,
    BeneficiosComponent,
    OpenFinanceComponent,
    InvestimentosComponent,
    EmprestimosComponent,
    CartoesComponent,
    LojaComponent,
    CardsComponent,
    MarketplaceComponent,
    InvestmentsComponent,
    BorrowComponent,
    RechargeComponent,
    BalanceComponent,
    PaymentsComponent,
    BenefitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
