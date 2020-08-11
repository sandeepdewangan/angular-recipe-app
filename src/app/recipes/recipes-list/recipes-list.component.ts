import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Gajar Ka Halwa', 'A tasty indian recipe', 'https://upload.wikimedia.org/wikipedia/commons/4/42/Gajjar_ka_halwa_%28carrot_halwa%29.JPG'),
    new Recipe('Farra', 'A tasty chhattisgarhi recipe', 'https://img-global.cpcdn.com/recipes/d05defff1d0d2aff/640x640sq70/photo.jpg'),
    new Recipe('Faluda', 'A tasty indian desert', 'https://smedia2.intoday.in/aajtak/images/stories/052018/falooda-pakwangali-520_052018080743.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
