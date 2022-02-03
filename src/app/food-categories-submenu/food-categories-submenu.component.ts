import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FoodCategory} from '../ens-shared /food-category';
import {foodCategoriesEnum}  from '../ens-shared /food-categories-enum'
import itemsData from 'src/mock-items/items-of-categories.json'
import {FormBuilder, FormGroup} from "@angular/forms";
interface categoriesItem {
  id: number;
  name: string;
}
@Component({
  selector: 'ens-food-categories-submenu',
  templateUrl: './food-categories-submenu.component.html',
  styleUrls: ['./food-categories-submenu.component.scss']
})
export class FoodCategoriesSubmenuComponent implements OnInit {
  @Input() category?: FoodCategory;

  ngOnInit(): void {
  }

}
