import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignthreeComponent } from './assignthree.component';

describe('AssignthreeComponent', () => {
  let component: AssignthreeComponent;
  let fixture: ComponentFixture<AssignthreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignthreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
