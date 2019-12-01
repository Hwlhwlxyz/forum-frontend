import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsertopicsComponent } from './usertopics.component';

describe('UsertopicsComponent', () => {
  let component: UsertopicsComponent;
  let fixture: ComponentFixture<UsertopicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsertopicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsertopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
