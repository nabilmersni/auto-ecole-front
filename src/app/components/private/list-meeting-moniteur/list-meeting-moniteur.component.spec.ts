import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMeetingMoniteurComponent } from './list-meeting-moniteur.component';

describe('ListMeetingMoniteurComponent', () => {
  let component: ListMeetingMoniteurComponent;
  let fixture: ComponentFixture<ListMeetingMoniteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMeetingMoniteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMeetingMoniteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
