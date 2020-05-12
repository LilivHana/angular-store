import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BadgeFilterComponent } from './badge-filter.component';

describe('BadgeFilterComponent', () => {
  let component: BadgeFilterComponent;
  let fixture: ComponentFixture<BadgeFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BadgeFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BadgeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
