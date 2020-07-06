import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorConduiteMeetComponent } from './monitor-conduite-meet.component';

describe('MonitorConduiteMeetComponent', () => {
  let component: MonitorConduiteMeetComponent;
  let fixture: ComponentFixture<MonitorConduiteMeetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitorConduiteMeetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitorConduiteMeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
