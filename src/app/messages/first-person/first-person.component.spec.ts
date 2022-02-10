import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstPersonComponent } from './first-person.component';

describe('FirstPersonComponent', () => {
  let component: FirstPersonComponent;
  let fixture: ComponentFixture<FirstPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
