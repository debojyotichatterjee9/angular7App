import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model'

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
    
    @Input('recipeModel') recipe: Recipe;
    @Output('selectRecipeEvent') recipeSelected = new EventEmitter<void>(); // not pasing any info from emitter

  constructor() { }

  ngOnInit(): void {
  }
    
    onRecipeSelected() {
        this.recipeSelected.emit();
    }

}
