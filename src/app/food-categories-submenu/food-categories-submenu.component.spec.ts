import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCategoriesSubmenuComponent } from './food-categories-submenu.component';

describe('FoodCategoriesSubmenuComponent', () => {
  let component: FoodCategoriesSubmenuComponent;
  let fixture: ComponentFixture<FoodCategoriesSubmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodCategoriesSubmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodCategoriesSubmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
