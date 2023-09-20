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
  index;
  constructor(private mapService: MapService) {}

  fetchCountryData() {
    this.mapService.fetchCountryData().subscribe(res => {
      this.countries$ = res[1];

      console.log(this.countries$);
    });
    return this.countries$;
  }
}
