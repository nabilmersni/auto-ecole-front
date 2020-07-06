import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConduiteMeetListComponent } from './conduite-meet-list.component';

describe('ConduiteMeetListComponent', () => {
  let component: ConduiteMeetListComponent;
  let fixture: ComponentFixture<ConduiteMeetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConduiteMeetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConduiteMeetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
