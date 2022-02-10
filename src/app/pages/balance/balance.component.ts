import { balance } from './../../interfaces/componentsInterfaces';
import { userBalance, userData } from './../../mocks/components-mocks';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent {

  extractItems: balance[] = userBalance;
  user = userData

  constructor() { }

}
