import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenFootwearComponent } from './men-footwear.component';

describe('MenFootwearComponent', () => {
  let component: MenFootwearComponent;
  let fixture: ComponentFixture<MenFootwearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenFootwearComponent]
    });
    fixture = TestBed.createComponent(MenFootwearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
