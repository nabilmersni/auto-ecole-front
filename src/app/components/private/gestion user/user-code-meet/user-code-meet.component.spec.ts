import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCodeMeetComponent } from './user-code-meet.component';

describe('UserCodeMeetComponent', () => {
  let component: UserCodeMeetComponent;
  let fixture: ComponentFixture<UserCodeMeetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCodeMeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCodeMeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
