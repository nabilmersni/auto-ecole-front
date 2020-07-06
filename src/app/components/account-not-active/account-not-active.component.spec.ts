import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountNotActiveComponent } from './account-not-active.component';

describe('AccountNotActiveComponent', () => {
  let component: AccountNotActiveComponent;
  let fixture: ComponentFixture<AccountNotActiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountNotActiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountNotActiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
