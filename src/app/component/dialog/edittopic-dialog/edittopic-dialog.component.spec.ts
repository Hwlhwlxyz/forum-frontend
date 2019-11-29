import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdittopicDialogComponent } from './edittopic-dialog.component';

describe('EdittopicDialogComponent', () => {
  let component: EdittopicDialogComponent;
  let fixture: ComponentFixture<EdittopicDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdittopicDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdittopicDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
