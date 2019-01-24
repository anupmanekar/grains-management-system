import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyEntriesComponent } from './buy-entries.component';

describe('BuyEntriesComponent', () => {
  let component: BuyEntriesComponent;
  let fixture: ComponentFixture<BuyEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
