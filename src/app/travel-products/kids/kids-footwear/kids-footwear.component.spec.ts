import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsFootwearComponent } from './kids-footwear.component';

describe('KidsFootwearComponent', () => {
  let component: KidsFootwearComponent;
  let fixture: ComponentFixture<KidsFootwearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KidsFootwearComponent]
    });
    fixture = TestBed.createComponent(KidsFootwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
