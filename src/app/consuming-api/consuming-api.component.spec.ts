import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumingApiComponent } from './consuming-api.component';

describe('ConsumingApiComponent', () => {
  let component: ConsumingApiComponent;
  let fixture: ComponentFixture<ConsumingApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumingApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumingApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
