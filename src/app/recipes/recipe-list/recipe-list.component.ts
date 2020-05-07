import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model' // imported the recipe model here to be able to use

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    
    recipes: Recipe[] = [new Recipe('Dummy', 'test Description', 'http://devimg.com/300x300/food'),
                        new Recipe('Dummy2', 'test Description2', 'http://devimg.com/300x300/food'),
                        new Recipe('Dummy3', 'test Description3', 'http://devimg.com/300x300/food')];

  constructor() { }

  ngOnInit(): void {
  }

}
