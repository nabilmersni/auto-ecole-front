import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeMeetListComponent } from './code-meet-list.component';

describe('CodeMeetListComponent', () => {
  let component: CodeMeetListComponent;
  let fixture: ComponentFixture<CodeMeetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeMeetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeMeetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
