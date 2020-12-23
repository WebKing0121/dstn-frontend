import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeepDiveCardComponent } from './deep-dive-card.component';

describe('DeepDiveCardComponent', () => {
  let component: DeepDiveCardComponent;
  let fixture: ComponentFixture<DeepDiveCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeepDiveCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeepDiveCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
