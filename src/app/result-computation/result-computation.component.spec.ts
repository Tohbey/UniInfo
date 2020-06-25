import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComputationComponent } from './result-computation.component';

describe('ResultComputationComponent', () => {
  let component: ResultComputationComponent;
  let fixture: ComponentFixture<ResultComputationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultComputationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComputationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
