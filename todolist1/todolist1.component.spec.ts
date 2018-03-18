import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Todolist1Component } from './todolist1.component';

describe('Todolist1Component', () => {
  let component: Todolist1Component;
  let fixture: ComponentFixture<Todolist1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Todolist1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Todolist1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
