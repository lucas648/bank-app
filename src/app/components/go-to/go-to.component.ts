import { goToItem } from './../../interfaces/componentsInterfaces';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'go-to',
  templateUrl: './go-to.component.html',
  styleUrls: ['./go-to.component.scss']
})
export class GoToComponent implements OnInit {

  @Input() items: goToItem[] = [];
  @Output() goToEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitRoute(item: goToItem){
    this.goToEmitter.emit(item.route)
  }

}
