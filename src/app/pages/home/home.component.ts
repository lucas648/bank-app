import { Router } from '@angular/router';
import { goToItem, ButtonItem } from './../../interfaces/componentsInterfaces';
import { gotoContent, carrousselButtonContent, userData } from './../../mocks/components-mocks';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  goToItem: goToItem[] = gotoContent;
  buttonCarrouselItem: ButtonItem[] = carrousselButtonContent;
  balanceInputType = 'password'
  user = userData

  constructor(
    private route : Router
  ) { }

  ngOnInit(): void {
  }

  mostrarSaldo(){
    this.balanceInputType === 'password' ? this.balanceInputType = 'text' : null;
  }

  navigateTo(recievedRoute: string){-
    3
    this.route.navigate([recievedRoute])
  }
}
