// ======================================================
// ; Title:          task-create-dialog
// ; Author:         Professor R. Krasso
// ; Modified by:    Faye Van Roekel
// ; Date:           25 March 2020
// ; Description:    Task create dialog
// ;======================================================

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCreateDialogComponent } from './task-create-dialog.component';

describe('TaskCreateDialogComponent', () => {
  let component: TaskCreateDialogComponent;
  let fixture: ComponentFixture<TaskCreateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskCreateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskCreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});