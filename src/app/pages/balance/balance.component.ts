import { UserService } from './../../services/user.service';
import { UserBalance } from './../../interfaces/componentsInterfaces';
import { userBalance, userData } from './../../mocks/components-mocks';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent {

  extractItems: any;
  user = userData

  constructor(
    private userServ: UserService
  ) { }

  getBalance(){
    this.userServ.getUserbalance('').subscribe(retorno=>{
      this.extractItems = retorno
    })
  }
}
