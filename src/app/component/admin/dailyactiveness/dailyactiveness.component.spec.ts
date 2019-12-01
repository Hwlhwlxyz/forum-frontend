import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyactivenessComponent } from './dailyactiveness.component';

describe('DailyactivenessComponent', () => {
  let component: DailyactivenessComponent;
  let fixture: ComponentFixture<DailyactivenessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyactivenessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyactivenessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
