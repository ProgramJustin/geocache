import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGeocacheComponent } from './edit-geocache.component';

describe('EditGeocacheComponent', () => {
  let component: EditGeocacheComponent;
  let fixture: ComponentFixture<EditGeocacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditGeocacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGeocacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
