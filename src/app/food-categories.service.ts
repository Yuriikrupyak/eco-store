import { Injectable } from '@angular/core';
import { FoodCategory } from "./ens-shared /food-category";
import { foodCategoriesEnum } from "./ens-shared /food-categories-enum";
import { Observable, of } from 'rxjs';
import { ItemDescriptionService } from "./item-description.service";

@Injectable({
  providedIn: 'root'
})
export class FoodCategoriesService {

  constructor(private itemDescriptionService: ItemDescriptionService ) { }

  getCategories(): Observable<FoodCategory[]>{
    const categories = of(foodCategoriesEnum);
    this.itemDescriptionService.add('FoodCategoriesService: fetched categories');
    return categories;
  }
  getCategory(id: number): Observable<FoodCategory> {
    const category = foodCategoriesEnum.find(c => c.id = id)!;
    this.itemDescriptionService.add(`FoodCategoriesService: fetched category id=${id}`)
    return of(category);
  }
}
