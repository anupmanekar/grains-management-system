import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyEntriesMgmtComponent } from './buy-entries-mgmt.component';

describe('BuyEntriesMgmtComponent', () => {
  let component: BuyEntriesMgmtComponent;
  let fixture: ComponentFixture<BuyEntriesMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyEntriesMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyEntriesMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
