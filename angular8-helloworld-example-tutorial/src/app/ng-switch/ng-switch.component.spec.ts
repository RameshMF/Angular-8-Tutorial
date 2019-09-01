import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgSwitchComponent } from './ng-switch.component';

describe('NgSwitchComponent', () => {
  let component: NgSwitchComponent;
  let fixture: ComponentFixture<NgSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
