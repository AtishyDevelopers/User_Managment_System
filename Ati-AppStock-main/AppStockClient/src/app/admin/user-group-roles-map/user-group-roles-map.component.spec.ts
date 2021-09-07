import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGroupRolesMapComponent } from './user-group-roles-map.component';

describe('UserGroupRolesMapComponent', () => {
  let component: UserGroupRolesMapComponent;
  let fixture: ComponentFixture<UserGroupRolesMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGroupRolesMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGroupRolesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
