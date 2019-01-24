import { Component, OnInit } from '@angular/core';
import { Feature } from '../../feature';
import { FeatureService } from '../../services/feature.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  features: Feature[] = [];

  constructor(private featureService: FeatureService) { }

  ngOnInit() {
    this.getFeatures();
  }

  getFeatures(): void {
    this.featureService.getFeatures()
      .subscribe(features => this.features = features);
  }
}
