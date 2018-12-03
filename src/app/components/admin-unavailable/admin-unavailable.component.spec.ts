import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUnavailableComponent } from './admin-unavailable.component';

describe('AdminUnavailableComponent', () => {
  let component: AdminUnavailableComponent;
  let fixture: ComponentFixture<AdminUnavailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUnavailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUnavailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
