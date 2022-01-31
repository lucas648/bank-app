import { ButtonItem } from './../../interfaces/componentsInterfaces';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'button-carrousel',
  templateUrl: './button-carrousel.component.html',
  styleUrls: ['./button-carrousel.component.scss']
})
export class ButtonCarrouselComponent implements OnInit {

  @Input() item: ButtonItem = {};
  @Output() buttonEmitter: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  eventEmiter(){
    this.buttonEmitter.emit(this.item)
  }
}
