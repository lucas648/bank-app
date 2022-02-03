import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { BalanceComponent } from './pages/balance/balance.component';
import { BenefitsComponent } from './pages/benefits/benefits.component';
import { BorrowComponent } from './pages/borrow/borrow.component';
import { CardsComponent } from './pages/cards/cards.component';
import { ForgetPasswordComponent } from './pages/forget-password/forget-password.component';
import { HomeComponent } from './pages/home/home.component';
import { InvestmentsComponent } from './pages/investments/investments.component';
import { LoginComponent } from './pages/login/login.component';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';
import { OpenFinanceComponent } from './pages/open-finance/open-finance.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { PixComponent } from './pages/pix/pix.component';
import { RechargeComponent } from './pages/recharge/recharge.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'balance',
    component: BalanceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'benefits',
    component: BenefitsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'borrow',
    component: BorrowComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cards',
    component: CardsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'forgetPassword',
    component: ForgetPasswordComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'investments',
    component: InvestmentsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'marketPlace',
    component: MarketplaceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'openFinance',
    component: OpenFinanceComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'payments',
    component: PaymentsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pix',
    component: PixComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'recharge',
    component: RechargeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
