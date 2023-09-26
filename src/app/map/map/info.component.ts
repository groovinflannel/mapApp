import { Component } from '@angular/core';
import { MapService } from '../map.service';

@Component({
  selector: 'app-root',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent {

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
