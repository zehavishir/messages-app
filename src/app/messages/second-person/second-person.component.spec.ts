import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPersonComponent } from './second-person.component';

describe('SecondPersonComponent', () => {
  let component: SecondPersonComponent;
  let fixture: ComponentFixture<SecondPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
