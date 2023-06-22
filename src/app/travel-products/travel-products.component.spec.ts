import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelProductsComponent } from './travel-products.component';

describe('TravelProductsComponent', () => {
  let component: TravelProductsComponent;
  let fixture: ComponentFixture<TravelProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelProductsComponent]
    });
    fixture = TestBed.createComponent(TravelProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
