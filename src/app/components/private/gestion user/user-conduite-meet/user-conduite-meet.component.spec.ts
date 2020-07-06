import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserConduiteMeetComponent } from './user-conduite-meet.component';

describe('UserConduiteMeetComponent', () => {
  let component: UserConduiteMeetComponent;
  let fixture: ComponentFixture<UserConduiteMeetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserConduiteMeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserConduiteMeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
