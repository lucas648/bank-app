import { balance } from './../../interfaces/componentsInterfaces';
import { userBalance } from './../../mocks/components-mocks';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent implements OnInit {

  extractItems: balance[] = userBalance;

  constructor() { }

  ngOnInit(): void {
  }

}
