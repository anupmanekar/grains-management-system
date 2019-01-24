import { Injectable } from '@angular/core';
import { FEATURES } from '../mock-features';
import { Feature } from '../feature';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';

@Injectable()
export class FeatureService {

  constructor(private messageService: MessageService) { }

  getFeatures(): Observable<Feature[]> {
    this.messageService.add('FeatureService: fetched features');
    return of(FEATURES);
  }

  getFeature(id: number): Observable<Feature> {
    // Todo: send the message _after_ fetching the Feature
    this.messageService.add(`FeatureService: fetched Feature id=${id}`);
    return of(FEATURES.find(feature => feature.id === id));
  }

}
