import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstaComponent } from './firsta.component';

describe('FirstaComponent', () => {
  let component: FirstaComponent;
  let fixture: ComponentFixture<FirstaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
