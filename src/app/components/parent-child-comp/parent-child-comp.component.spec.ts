import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChildCompComponent } from './parent-child-comp.component';

describe('ParentChildCompComponent', () => {
  let component: ParentChildCompComponent;
  let fixture: ComponentFixture<ParentChildCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentChildCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentChildCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
