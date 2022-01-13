import { TestBed } from '@angular/core/testing';

import { FoodCategoriesServiceService } from './food-categories-service.service';

describe('FoodCategoriesServiceService', () => {
  let service: FoodCategoriesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodCategoriesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
