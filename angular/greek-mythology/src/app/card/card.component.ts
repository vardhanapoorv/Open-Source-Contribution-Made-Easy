import {Component, Input, OnInit} from '@angular/core';
import {GodsModel} from "../base/gods.model";

@Component({
  selector: 'card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input('god') god: GodsModel;

  constructor() {
  }

  ngOnInit() {
  }

}
