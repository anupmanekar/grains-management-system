import { Component, OnInit, Input } from '@angular/core';
import { Feature } from '../../feature';
import { ActivatedRoute } from '@angular/router';
import { FeatureService } from '../../services/feature.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-feature-detail',
  templateUrl: './feature-detail.component.html',
  styleUrls: ['./feature-detail.component.css']
})
export class FeatureDetailComponent implements OnInit {
  @Input() feature: Feature;
  constructor(private route: ActivatedRoute,
    private featureService: FeatureService,
    private location: Location) { }
  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.featureService.getFeature(id)
      .subscribe(feature => this.feature = feature);
  }

  goBack(): void {
    this.location.back();
  }
}
