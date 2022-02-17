import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { goToItem, ButtonItem } from './../../interfaces/componentsInterfaces';
import { gotoContent, carrousselButtonContent } from './../../mocks/components-mocks';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  goToItem: goToItem[] = gotoContent;
  buttonCarrouselItem: ButtonItem[] = carrousselButtonContent;
  balanceInputType = 'password';
  user : any;

  constructor(
    private route : Router,
    private userServ: UserService
  ) { }

  ngOnInit(){
    this.userServ.getUserData('').subscribe(retorno=>{
      console.log(retorno)
      this.user = retorno
    })
  }

  mostrarSaldo(){
    this.balanceInputType === 'password' ? this.balanceInputType = 'text' : this.balanceInputType = 'password';
  }

  navigateTo(recievedRoute: string){
    console.log(recievedRoute)
    this.route.navigate([recievedRoute])
  }
}
