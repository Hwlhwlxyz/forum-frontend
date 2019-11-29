import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcommentDialogComponent } from './editcomment-dialog.component';

describe('EditcommentDialogComponent', () => {
  let component: EditcommentDialogComponent;
  let fixture: ComponentFixture<EditcommentDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcommentDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcommentDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
