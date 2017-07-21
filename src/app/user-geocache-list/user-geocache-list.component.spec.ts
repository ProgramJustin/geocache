import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGeocacheListComponent } from './user-geocache-list.component';

describe('UserGeocacheListComponent', () => {
  let component: UserGeocacheListComponent;
  let fixture: ComponentFixture<UserGeocacheListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserGeocacheListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGeocacheListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
