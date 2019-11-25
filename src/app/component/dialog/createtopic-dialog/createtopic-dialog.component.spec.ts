import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetopicDialogComponent } from './createtopic-dialog.component';

describe('CreatetopicDialogComponent', () => {
  let component: CreatetopicDialogComponent;
  let fixture: ComponentFixture<CreatetopicDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetopicDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetopicDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
