import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredient } from "../../shared/ingredient.model"

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
    
    @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;
    @ViewChild('quantityInput', {static: true}) quantityInputRef: ElementRef;
    @Output('addIngredinetEmit') ingredientAdded = new EventEmitter<Ingredient>();


  constructor() { }

  ngOnInit(): void {
  }
    
    onAddItem() {
        const ingredientName = this.nameInputRef.nativeElement.value;
        const ingredientQuantity = this.quantityInputRef.nativeElement.value;
        const ingredient = new Ingredient(ingredientName, ingredientQuantity)
        this.ingredientAdded.emit(ingredient);
    }

    onDeleteItem() {
        console.warn("Not Implemented...")
    }
    
    onClearItem() {
        console.warn("Not Implemented...")
    }
}
