import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecommentDialogComponent } from './createcomment-dialog.component';

describe('CreatecommentDialogComponent', () => {
  let component: CreatecommentDialogComponent;
  let fixture: ComponentFixture<CreatecommentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatecommentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecommentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
