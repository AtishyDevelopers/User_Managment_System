import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleformMapComponent } from './roleform-map.component';

describe('RoleformMapComponent', () => {
  let component: RoleformMapComponent;
  let fixture: ComponentFixture<RoleformMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoleformMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleformMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
