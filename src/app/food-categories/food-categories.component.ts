import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { foodCategoriesEnum } from "../food-categories-enum";
import { FoodCategory } from "../food-category";
@Component({
  selector: 'ens-food-categories',
  templateUrl: './food-categories.component.html',
  styleUrls: ['./food-categories.component.scss']
})
export class FoodCategoriesComponent implements OnInit {

  categories = foodCategoriesEnum;
  selectedCategory?: FoodCategory ;
  categoryImgStyle = 'width:230px; height: 140px; padding-top: 10px;';
  categoryNameColor = 'color: #369;'
  constructor() { }

  ngOnInit(): void {

  }

  onSelect(category: FoodCategory): void{
    this.selectedCategory = category;
  }
}
