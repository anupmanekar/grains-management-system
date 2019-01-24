import { Component, OnInit } from '@angular/core';
import { BuyEntry } from '../../buy-entry';
import { BuyEntryService } from '../../services/buy-entry.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-add-buy-entry',
  templateUrl: './add-buy-entry.component.html',
  styleUrls: ['./add-buy-entry.component.css']
})
export class AddBuyEntryComponent implements OnInit {

  submitted = false;
  model = new BuyEntry();
  onSubmit() {
    this.submitted = true;
    console.log('Submitted' + this.model.entryDate);
    this.saveBuyEntries();
  }
  constructor(private buyEntryService: BuyEntryService) { }
  ngOnInit() {
  }

  saveBuyEntries(): void {
    this.buyEntryService.saveBuyEntries(this.model).subscribe(
      data => {
        this.model.id = data;
      }
    );
  }

}
