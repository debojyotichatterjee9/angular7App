import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [ // the only thing that will grt stored in this recipes propety is an array which holds Recipe object
    new Recipe('Test Recipe', 'Test Decription', 'https://cdn-prod.medicalnewstoday.com/content/images/articles/324/324956/close-up-of-a-plate-of-food.jpg'),
    new Recipe('Test Recipe', 'Test Decription', 'https://cdn-prod.medicalnewstoday.com/content/images/articles/324/324956/close-up-of-a-plate-of-food.jpg')
  ]; 
  constructor() { }

  ngOnInit() {
  }

}
