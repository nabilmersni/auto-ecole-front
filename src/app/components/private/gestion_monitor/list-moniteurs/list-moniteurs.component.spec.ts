import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMoniteursComponent } from './list-moniteurs.component';

describe('ListMoniteursComponent', () => {
  let component: ListMoniteursComponent;
  let fixture: ComponentFixture<ListMoniteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMoniteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMoniteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
