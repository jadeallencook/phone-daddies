import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLocationsComponent } from './admin-locations.component';

describe('AdminLocationsComponent', () => {
  let component: AdminLocationsComponent;
  let fixture: ComponentFixture<AdminLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
