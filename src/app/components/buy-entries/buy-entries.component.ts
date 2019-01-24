import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { BuyEntryService } from '../../services/buy-entry.service';
import { BuyEntry } from '../../buy-entry';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import { Member } from '../../member';


@Component({
  selector: 'app-buy-entries',
  templateUrl: './buy-entries.component.html',
  styleUrls: ['./buy-entries.component.css']
})
export class BuyEntriesComponent implements AfterViewInit, OnInit {
  displayedColumns = ['id', 'entryDate', 'sellerName', 'town', 'grainType', 'totalAmount', 'weight', 'ratePerKg', 'labourCharge', 'transactionRef', 'actionsColumn'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  buy_entries: BuyEntry[];
  currentUser: Member;
  constructor(private buyEntryService: BuyEntryService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit() {
    this.getBuyEntries();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  getBuyEntries(): void {
    this.buyEntryService.getBuyEntries().subscribe(
      data => {
        this.dataSource.data = data;
      }
    );
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}
