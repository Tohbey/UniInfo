import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammelistComponent } from './programmelist.component';

describe('ProgrammelistComponent', () => {
  let component: ProgrammelistComponent;
  let fixture: ComponentFixture<ProgrammelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
