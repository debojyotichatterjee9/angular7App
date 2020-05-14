import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
    
    userSelectedRecipe: Recipe; 
    // assigning the variable directly from the html template file
    // but always try to put as little logic as possible in the template files

  constructor() { }

  ngOnInit(): void {
  }
    
}
