import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstcComponent } from './firstc.component';

describe('FirstcComponent', () => {
  let component: FirstcComponent;
  let fixture: ComponentFixture<FirstcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
