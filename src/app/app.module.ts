import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FoodCategoriesComponent } from './food-categories/food-categories.component';
import { FoodCategoriesSubmenuComponent } from './food-categories-submenu/food-categories-submenu.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { OrdersTableComponent } from './orders-table/orders-table.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodCategoriesComponent,
    FoodCategoriesSubmenuComponent,
    OrdersTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
