import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMeetingUserComponent } from './list-meeting-user.component';

describe('ListMeetingUserComponent', () => {
  let component: ListMeetingUserComponent;
  let fixture: ComponentFixture<ListMeetingUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMeetingUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMeetingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
