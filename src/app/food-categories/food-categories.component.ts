import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { foodCategoriesEnum } from "../ens-shared /food-categories-enum";
import { FoodCategory } from "../ens-shared /food-category";
import {Item} from "./Item";
import {FoodCategoriesService} from "../food-categories.service";
import {ItemDescriptionService} from "../item-description.service";

@Component({
  selector: 'ens-food-categories',
  templateUrl: './food-categories.component.html',
  styleUrls: ['./food-categories.component.scss']
})
export class FoodCategoriesComponent implements OnInit {

  selectedCategory?: FoodCategory ;
  // categories = foodCategoriesEnum;
  categories: FoodCategory[] = [];

  categoryImgStyle = 'width:230px; height: 140px; padding-top: 10px;';
  categoryNameColor = 'color: #369;'

  constructor(private foodCategoriesService: FoodCategoriesService, private itemDescriptionService: ItemDescriptionService ) { }

  ngOnInit(): void {
    this.getCategories();
  }

  onSelect(category: FoodCategory): void{
    this.selectedCategory = category;
    this.itemDescriptionService.add(`FoodCategoriesComponent: select category id=${category.id}`)
  }
  getCategories() {
    this.foodCategoriesService.getCategories().subscribe(categories => this.categories = categories)
  }
}
