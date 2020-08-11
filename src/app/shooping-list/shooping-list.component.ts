import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shooping-list',
  templateUrl: './shooping-list.component.html',
  styleUrls: ['./shooping-list.component.css']
})
export class ShoopingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Rice Floor', 5),
    new Ingredient('Carrot', 2)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
