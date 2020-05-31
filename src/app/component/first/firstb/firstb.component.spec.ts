import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstbComponent } from './firstb.component';

describe('FirstbComponent', () => {
  let component: FirstbComponent;
  let fixture: ComponentFixture<FirstbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
