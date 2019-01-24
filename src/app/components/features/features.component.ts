import { Component, OnInit } from '@angular/core';
import { FeatureService } from '../../services/feature.service';
import { Feature } from '../../feature';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  features: Feature[];
  selectedFeature: Feature;
  constructor(private featureService: FeatureService) { }
  ngOnInit() {
    this.getFeatures();
  }
  onSelect(feature: Feature): void {
    this.selectedFeature = feature;
  }

  getFeatures(): void {
    this.featureService.getFeatures().subscribe(
      features => this.features = features
    );
  }

}
