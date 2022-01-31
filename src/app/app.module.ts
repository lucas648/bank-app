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
    ForgetPasswordComponent
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
