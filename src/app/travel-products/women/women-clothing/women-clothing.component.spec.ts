import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenClothingComponent } from './women-clothing.component';

describe('WomenClothingComponent', () => {
  let component: WomenClothingComponent;
  let fixture: ComponentFixture<WomenClothingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WomenClothingComponent]
    });
    fixture = TestBed.createComponent(WomenClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
