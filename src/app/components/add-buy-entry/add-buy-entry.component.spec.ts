import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBuyEntryComponent } from './add-buy-entry.component';

describe('AddBuyEntryComponent', () => {
  let component: AddBuyEntryComponent;
  let fixture: ComponentFixture<AddBuyEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBuyEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBuyEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
