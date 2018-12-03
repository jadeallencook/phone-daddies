import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPricesComponent } from './admin-prices.component';

describe('AdminPricesComponent', () => {
  let component: AdminPricesComponent;
  let fixture: ComponentFixture<AdminPricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
