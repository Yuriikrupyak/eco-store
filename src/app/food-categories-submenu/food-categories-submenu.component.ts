import {Component, Input, OnInit} from '@angular/core';
import {FoodCategory} from "../food-category";

@Component({
  selector: 'ens-food-categories-submenu',
  templateUrl: './food-categories-submenu.component.html',
  styleUrls: ['./food-categories-submenu.component.scss']
})
export class FoodCategoriesSubmenuComponent implements OnInit {
  @Input() category?: FoodCategory;

  constructor() { }

  ngOnInit(): void {
  }

}
