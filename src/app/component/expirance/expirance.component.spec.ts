import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiranceComponent } from './expirance.component';

describe('ExpiranceComponent', () => {
  let component: ExpiranceComponent;
  let fixture: ComponentFixture<ExpiranceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpiranceComponent]
    });
    fixture = TestBed.createComponent(ExpiranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
