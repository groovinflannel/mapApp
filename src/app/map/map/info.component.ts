import { Component } from '@angular/core';
import { WorldMapSvgService } from '../worldMapSvg/worldMapSvg.service';

@Component({
  selector: 'app-root',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent {

  countries$;
  title = 'mapApp';
  index;
  countryObj;
  constructor(private worldMapSvgService: WorldMapSvgService) {}

  

  fetchCountryObject() {
    this.countryObj = '';
    console.log(this.countryObj);
  }
}
