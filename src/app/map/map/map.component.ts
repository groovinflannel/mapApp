import { Component } from '@angular/core';
import { MapService } from '../map.service';

@Component({
  selector: 'app-root',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {

  countries$;
  title = 'mapApp';
  constructor(private mapService: MapService) {}

  fetchCountryData() {
    this.countries$ = this.mapService.fetchCountryData();
  }
}
