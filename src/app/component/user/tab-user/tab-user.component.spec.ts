import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabUserComponent } from './tab-user.component';

describe('TabUserComponent', () => {
  let component: TabUserComponent;
  let fixture: ComponentFixture<TabUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
