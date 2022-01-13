import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ens-food-categories-submenu',
  templateUrl: './food-categories-submenu.component.html',
  styleUrls: ['./food-categories-submenu.component.scss']
})
export class FoodCategoriesSubmenuComponent implements OnInit {
  newSelectedCategory?: string;
  constructor() { }

  ngOnInit(): void {
  }

}
